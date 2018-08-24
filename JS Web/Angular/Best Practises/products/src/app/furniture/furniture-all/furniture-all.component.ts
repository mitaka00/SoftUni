import { Component, OnInit } from '@angular/core';
import { FurnitureServiceService } from '../furniture-service.service';
import { Furniture } from '../models/furniture';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.css']
})
export class FurnitureAllComponent implements OnInit {
  data: Furniture[]

  constructor(private service: FurnitureServiceService) { }

  ngOnInit() {
   this.service.getAll().subscribe(data=>this.data = data)
   
  }

  deleteItem(id){
    this.service.deleteItem(id).subscribe(()=>this.service.getAll().subscribe(data=>this.data = data))
    
  }
}
