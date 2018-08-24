import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {
  id:string;
  bindingModel

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

  delete(){
    this.carService.deleteCar(this.id).subscribe(()=>{
      this.toastr.success('Car deleted!', 'Success');
      this.router.navigate(['/cars/list']);
    })
  }
}
