import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CarCreateComponent } from './car-create/car-create.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarFavouritesComponent } from './car-favourites/car-favourites.component';

import { AdminGuard } from '../auth/guards/admin.guard';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CarDeleteComponent } from './car-delete/car-delete.component';

const routes : Route[] = [
  { path: '', pathMatch: 'full', component: CarListComponent},
  { path: 'create', component: CarCreateComponent, canActivate: [ AuthGuard, AdminGuard]},
  { path: 'details/:id', component: CarDetailsComponent,},
  { path: 'edit/:id', component:CarEditComponent, canActivate: [ AuthGuard, AdminGuard ]},
  { path: 'delete/:id', component:CarDeleteComponent, canActivate: [ AuthGuard, AdminGuard ]},
  { path: 'list', component: CarListComponent },
  { path: 'favourites/:username', component: CarFavouritesComponent, canActivate: [ AuthGuard ]},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class CarRoutingModule {}