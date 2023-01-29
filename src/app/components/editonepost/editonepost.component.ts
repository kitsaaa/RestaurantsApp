import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from 'src/app/services/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-editonepost',
  templateUrl: './editonepost.component.html',
  styleUrls: ['./editonepost.component.css']
})
export class EditonepostComponent implements OnInit {

  newPost: IPost = new IPost();

  title: string = '';
  featuredImage: string = '';
  post: string = '';
  category: string = '';
  currentUser: any = window.sessionStorage.getItem('currentUser');
  constructor(private _postsService: PostsService, private _router: Router) { }

  ngOnInit(): void {
  }
  onModifyPostClick()
  {

  }
  
  onDeletePostClick()
  {

  }

}
