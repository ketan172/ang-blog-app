import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredPostArray: Array<any> = [];
  latestPostArray: Array<any> = [];

  constructor(private postService:PostsService) {
    
  }

  ngOnInit(): void {
    this.postService.loadFeatured().subscribe(val =>{
      //console.log(val);
      this.featuredPostArray = val;
    })
    this.postService.loadLatest().subscribe(val =>{
      //console.log(val);
      this.latestPostArray = val;
    })
  }

}
