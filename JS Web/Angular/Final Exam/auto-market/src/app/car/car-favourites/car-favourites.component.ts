import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-car-favourites',
  templateUrl: './car-favourites.component.html',
  styleUrls: ['./car-favourites.component.css']
})
export class CarFavouritesComponent implements OnInit {
  favourites:Array<Object>
  cars

  constructor(
    private carService : CarService,
    private authService : AuthService,
    private route : ActivatedRoute,
    private router : Router,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.favourites=[];
    this.carService.getAllCars().subscribe((data)=>{
    this.cars=data

    for(let obj of this.cars){
      if(obj['favouriteUsers'].includes(this.authService.username)){
        this.favourites.push(obj);
        }
      }
    });
  }

  remove(currentCar){
    let favUsers=currentCar['favouriteUsers'].filter(item=>item!=this.authService.username)

    this.carService.removeFavourites(currentCar._id,favUsers)
  }
}
