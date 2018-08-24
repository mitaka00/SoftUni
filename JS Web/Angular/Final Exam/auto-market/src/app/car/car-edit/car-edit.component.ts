import { Component, OnInit } from '@angular/core';
import { CarCreate } from '../models/car-create.model';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  id : string;
  bindingModel;
  body:{}

  constructor(
    private carService : CarService,
    private route : ActivatedRoute,
    private router : Router,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.carService.getById(this.id)
      .subscribe((data) => {
        this.bindingModel = data;
      })
  }

  edit() {
    this.body={
      name:this.bindingModel.name,
      price:this.bindingModel.price,
      imagePath:this.bindingModel.imagePath,
      description:this.bindingModel.description,
      favouriteUsers:this.bindingModel['favouriteUsers']
    }
    this.carService.editCar(this.id,this.body)
      .subscribe((data) => {
        this.toastr.success('Car edited!', 'Success!');
        this.router.navigate(['/cars/list']);
      })
    }
}
