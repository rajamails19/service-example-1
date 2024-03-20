// src/app/movie-list/movie-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  // template: `
  //   <div>{{ sharedData }}</div>
  // `,
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  sharedData: any;

  constructor(private movieService: MovieService, private shareDataService: SharedataService) {}

  ngOnInit() {
    this.shareDataService.getData().subscribe(data => {
      this.sharedData = data;
    })
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data;
    });
  }
}
