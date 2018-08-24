import { Component, OnInit } from '@angular/core';
import { Furniture } from '../models/furniture';
import { FurnitureServiceService } from '../furniture-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-furniture-edit',
  templateUrl: './furniture-edit.component.html',
  styleUrls: ['./furniture-edit.component.css']
})
export class FurnitureEditComponent implements OnInit {
  data: Furniture
  constructor(private service: FurnitureServiceService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    let id = this.router.snapshot.params['id']
    this.service.getById(id).subscribe(data=>this.data=data)
  }

  edit(){
    console.log('tuk')
    console.log(this.route)
    let id = this.router.snapshot.params['id']
    this.service.edit(id, this.data).subscribe()
    this.route.navigate(['furniture/all'])
  }

}
