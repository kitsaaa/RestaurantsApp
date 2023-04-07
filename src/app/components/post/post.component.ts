import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/services/Post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post')
  post: IPost = new IPost;
  rating = 0;
  constructor() { }

  ngOnInit(): void {
  }

}