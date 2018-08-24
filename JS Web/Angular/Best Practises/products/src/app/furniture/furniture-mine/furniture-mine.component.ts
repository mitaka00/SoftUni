import { Component, OnInit } from '@angular/core';
import { Furniture } from '../models/furniture';
import { FurnitureServiceService } from '../furniture-service.service';

@Component({
  selector: 'app-furniture-mine',
  templateUrl: './furniture-mine.component.html',
  styleUrls: ['./furniture-mine.component.css']
})
export class FurnitureMineComponent implements OnInit {
  data: Furniture[]
  constructor(private service: FurnitureServiceService) { }

  ngOnInit() {
    this.service.getMine().subscribe(data=> this.data=data)
  }

  deleteItem(id){
    this.service.delete(id).subscribe(data=>console.log(data))
  }

}
