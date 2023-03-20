import { PostsService } from './../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
       
  postData:any;
  similarPostArray!: Array<any>;

  constructor(private route:ActivatedRoute,private postService:PostsService) {

  } 

  ngOnInit(): void {
    this.route.params.subscribe(val =>{
      
      // this.postService.countViews(val['id']);
      
      this.postService.loadOnePost(val['id']).then((post: any) =>{
        this.postData = post;
        this.loadSimilarPost(this.postData.category.categoryId);
      })
    })
  }

  loadSimilarPost(catId: unknown){
     this.postService.loadSimilar(catId).subscribe(val =>{
      this.similarPostArray = val;
     })
  }
}
