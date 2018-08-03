import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../service/movies.service';
import {ActivatedRoute} from '../../../node_modules/@angular/router'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:Object;

  constructor(private route:ActivatedRoute,private moviesService:MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let id=params['id'];

      this.moviesService.getMovie(id).subscribe(data=>{
        this.movie=data;
        console.log(this.movie)
      })
    })
  }
}
