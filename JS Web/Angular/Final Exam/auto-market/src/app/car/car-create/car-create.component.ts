import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../../../../node_modules/ngx-toastr';
import { Router } from '../../../../node_modules/@angular/router';
import { CarCreate } from '../models/car-create.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {
  bindingModel : CarCreate;

  constructor(
    private carService : CarService,
    private toastr : ToastrService,
    private router : Router
  ) {
    this.bindingModel = new CarCreate('','',0,'');
   }

  ngOnInit() {
  }

  create() {
    let finalBody=this.bindingModel;

    if(finalBody.name==='' || finalBody.price===0 || finalBody.imagePath===''){
      this.toastr.error('Only description can be empty!', 'Warning');
      return;
    }
    finalBody['favouriteUsers']=[];

    this.carService.createCar(finalBody).subscribe(() => {
        this.toastr.success('Car created!', 'Success');
        this.router.navigate(['/cars/list']);
      })
  }

}
