import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarList } from '../models/car-list.model';
import { CarService } from '../car.service';
import {AuthService} from './../../auth/auth.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars;
  searchedName:string;
  allCars;

  constructor( private carService : CarService,private authService:AuthService,private router : Router,private toastr : ToastrService) { }

  ngOnInit() {
   this.carService.getAllCars().subscribe(data=>{
      this.cars = data
    });
  }

  clickStar(id){
    this.carService.addFavourites(id,this.authService.username)
  }

  showDescription(car){
    return car['description'].slice(0,20)
  }

  showStar(car){
    if(car['favouriteUsers'].includes(this.authService.username)){
      return true;
    } 
    else{
      return false;
    }
  }

  search(){
    this.carService.getAllCars().subscribe(data=>{
      if(this.searchedName===''){
        this.cars=data;
      } else{
        this.allCars=data;
        this.cars=[];
        for(let car of this.allCars){
          let name=car['name'].toLowerCase()
          this.searchedName=this.searchedName.toLowerCase();

          if(name.indexOf(this.searchedName)!==-1){
            this.cars.push(car);
          }
        }
      }
    });
  }
}
