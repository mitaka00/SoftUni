import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const appKey='fa99a2533b84a16f2471dc97827ec1d2';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  path = 'https://api.themoviedb.org/3/';
  popular = 'discover/movie?sort_by=popularity.desc';
  theaters='discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  kids='discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  drama='discover/movie?with_genres=18&primary_release_year=2014';
  authentication = '&api_key=';

  constructor(private http:HttpClient) {}
    getPopular(){
      return this.http.get(`${this.path}${this.popular}${this.authentication}${appKey}`)
    }

    getTheater(){
      return this.http.get(`${this.path}${this.theaters}${this.authentication}${appKey}`)
    }

    getKidsMovies(){
      return this.http.get(`${this.path}${this.kids}${this.authentication}${appKey}`)
    }

    getDrama(){
      return this.http.get(`${this.path}${this.drama}${this.authentication}${appKey}`)
    }

    getMovie(id){
      return this.http.get(`${this.path}movie/${id}?api_key=${appKey}`)
    }
}
