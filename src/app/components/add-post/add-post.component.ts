import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from 'src/app/services/Post';
import { PostsService } from 'src/app/services/posts.service';

var mongoObjectId = function () {
  var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
      return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase(); 
};

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  newPost: IPost = new IPost();

  title: string = '';
  featuredImage: string = '';
  post: string = '';
  category: string = '';
  currentUser: any = window.sessionStorage.getItem('currentUser');
  date: Date = new Date();


  constructor(private _postsService: PostsService, private _router: Router) { }

  onAddPostClick() {
    this.newPost._id = mongoObjectId();
    this.newPost.title = this.title;
    this.newPost.featuredImage = this.featuredImage;
    this.newPost.post = this.post;
    this.newPost.category = this.category;
    this.newPost.postedBy = this.currentUser;
    this.newPost.postDate = this.date.toDateString();

    this._postsService.newPost(this.newPost).subscribe(data => {
      this._router.navigate(['/dashboard']);
    })
  }

  ngOnInit(): void {
  }

}
