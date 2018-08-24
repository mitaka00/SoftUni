import { Component, OnInit } from '@angular/core';
import { Furniture } from '../models/furniture';
import { FurnitureServiceService } from '../furniture-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-furniture-create',
  templateUrl: './furniture-create.component.html',
  styleUrls: ['./furniture-create.component.css']
})
export class FurnitureCreateComponent implements OnInit {
  data: Furniture

  constructor(private service: FurnitureServiceService, private route: Router) { 
    this.data = new Furniture('','',0,'',0,'','');
  }

  create(){
    this.service.createModel(this.data).subscribe(data=>console.log(data))

    this.route.navigate(['furniture/all'])
  }

  ngOnInit() {
  }

}
