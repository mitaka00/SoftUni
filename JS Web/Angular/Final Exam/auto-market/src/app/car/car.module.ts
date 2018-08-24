import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarFavouritesComponent } from './car-favourites/car-favourites.component';
import { CarRoutingModule } from './car-routing.module';
import { CarDeleteComponent } from './car-delete/car-delete.component';

@NgModule({
  declarations: [
    CarDetailsComponent,
    CarEditComponent,
    CarListComponent,
    CarCreateComponent,
    CarFavouritesComponent,
    CarDeleteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CarRoutingModule
  ]
})
export class CarModule { }