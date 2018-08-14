import { Component, OnInit } from '@angular/core';
import { Furniture } from '../models/furniture';
import { FurnitureServiceService } from '../furniture-service.service';

@Component({
  selector: 'app-furniture-create',
  templateUrl: './furniture-create.component.html',
  styleUrls: ['./furniture-create.component.css']
})
export class FurnitureCreateComponent implements OnInit {
  data: Furniture

  constructor(private service: FurnitureServiceService) { 
    this.data = new Furniture('','',0,'',0,'','');
  }

  create(){
    this.service.createModel(this.data).subscribe(data=>console.log(data))
  }

  ngOnInit() {
  }

}
