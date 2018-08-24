import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureCreateComponent } from './furniture-create/furniture-create.component';
import { FurnitureAllComponent } from './furniture-all/furniture-all.component';
import { FurnitureMineComponent } from './furniture-mine/furniture-mine.component';
import { FurnitureEditComponent } from './furniture-edit/furniture-edit.component';



const furnitureRoutes: Routes = [
  { path: 'create', component: FurnitureCreateComponent },
  { path: 'all', component: FurnitureAllComponent },
  { path: 'mine', component: FurnitureMineComponent },
  { path: 'edit/:id', component: FurnitureEditComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(furnitureRoutes)],
  exports: [RouterModule]
})
export class FurnitureRoutingModule { }