import { Component, OnInit } from '@angular/core';
import { CarList } from '../models/car-list.model';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car;
  id : string;

  constructor(
    private carService : CarService,
    private route : ActivatedRoute,
    private toastr : ToastrService,
    private router : Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.carService.getById(this.id)
      .subscribe(data => {
        console.log(data)
        this.car = data;
      })
  }
  

}
