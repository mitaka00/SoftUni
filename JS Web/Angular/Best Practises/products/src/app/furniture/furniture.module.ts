import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { FurnitureAllComponent } from './furniture-all/furniture-all.component';
import { FurnitureServiceService } from './furniture-service.service';
import { FurnitureCreateComponent } from './furniture-create/furniture-create.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureMineComponent } from './furniture-mine/furniture-mine.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FurnitureRoutingModule } from './furniture-routing.module';
import { FurnitureEditComponent } from './furniture-edit/furniture-edit.component';

@NgModule({
    declarations: [
     FurnitureAllComponent,
     FurnitureCreateComponent,
     FurnitureDetailsComponent,
     FurnitureMineComponent,
     FurnitureEditComponent
    ],
    imports: [
     FormsModule,
     CommonModule,
     FurnitureRoutingModule
    ],
    providers: [ 
      FurnitureServiceService
    ]
    
    
      
  })
  export class FurnitureModule { }