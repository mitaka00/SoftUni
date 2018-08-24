import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CarCreate } from './models/car-create.model';
import { CarList } from './models/car-list.model';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const hostUrl='https://baas.kinvey.com';
const appKey = "kid_rJv4MMxU7";
const appSecret = "4fba5e8792bb428d8212af13c9a920bd";
const masterSecret='603bfc9a063b48e1bb8d51b86dc7eb11';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(
    private http : HttpClient,
    private carService : CarService,private authService:AuthService,private router : Router,private toastr : ToastrService
  ) {  }

  getAllCars() {
    return this.http.get(`${hostUrl}/appdata/${appKey}/cars?query={}&sort={"_kmd.ect": -1}`, {
        headers:{
        'Authorization': 'Basic ' + btoa(`${appKey}:${masterSecret}`),
        }
     }).pipe(map((res : Response) => {
       return res
      }));
  }

  createCar(body : CarCreate) {
    return this.http.post(`${hostUrl}/appdata/${appKey}/cars`, body, {
       headers:{
        'Authorization': 'Kinvey ' +localStorage.getItem('authtoken'),
        'Content-Type': 'application/json'
       }
    });
  }

  getById(carId : string) {
    return this.http.get(`${hostUrl}/appdata/${appKey}/cars/${carId}`,{
      headers:{
        'Authorization': 'Basic ' + btoa(`${appKey}:${masterSecret}`),
      }
    });
  }

  editCar(id,body) {
    console.log(id,body)
    return this.http.put(`${hostUrl}/appdata/${appKey}/cars/${id}`, body,{
      headers:{
        'Authorization': 'Basic ' + btoa(`${appKey}:${masterSecret}`),
        'Content-Type': 'application/json'
      }
    });
  }

  deleteCar(carId : string) {
    return this.http.delete(`${hostUrl}/appdata/${appKey}/cars/${carId}`,{
      headers:{
        'Authorization': 'Kinvey ' +localStorage.getItem('authtoken'),
      }
    });
  }

  addFavourites(id,username){
    let car;
    this.getById(id).subscribe((data)=>{  
      car=data;
      car['favouriteUsers'].push(username);
     
      this.editCar(id,car).subscribe((data)=>{
        this.toastr.success('Car added to favourites!', 'Success');
        this.router.navigate([`/cars/favourites/${this.authService.username}`]);
      });
    })   
  }

  removeFavourites(id,favourites){
    let car;
    this.getById(id).subscribe((data)=>{  
      car=data;
      car['favouriteUsers']=favourites;
     
      this.editCar(id,car).subscribe((data)=>{
        this.toastr.success('Car removed from favourites!', 'Success');
        this.router.navigate([`/cars/list`]);
      });
    })   
  }
}