import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Furniture } from '../models/furniture';
import { FurnitureServiceService } from '../furniture-service.service';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  data: Furniture
  constructor(private route: ActivatedRoute, private service: FurnitureServiceService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    console.log(id)
    this.service.getDetails(id).subscribe(data=>this.data=data)

  }

}
