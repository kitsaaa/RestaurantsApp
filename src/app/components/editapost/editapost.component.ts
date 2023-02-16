import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/services/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-editapost',
  templateUrl: './editapost.component.html',
  styleUrls: ['./editapost.component.css']
})
export class EditapostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }
  post: IPost = new IPost();
  ngOnInit(): void {

 }

}
