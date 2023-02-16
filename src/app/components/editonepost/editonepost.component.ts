import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/services/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-editonepost',
  templateUrl: './editonepost.component.html',
  styleUrls: ['./editonepost.component.css']
})
export class EditonepostComponent implements OnInit {

  post: IPost = new IPost();

 
  currentUser: any = window.sessionStorage.getItem('currentUser');
  constructor(private _postsService: PostsService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      //TODO: Get post by Id params['id'] and store the result in this.post
      console.log(params['id']);
      this._postsService.getPostById(params['id']).subscribe(data => {
        this.post = data;
        console.log(data);
      })
     }) 
  }
  onModifyPostClick()
  {
    this._postsService.updatePostById(this.post._id, this.post).subscribe(data => {
      console.log(data);
      this._router.navigate(['/dashboard']);
    })
  }
  
  onDeletePostClick()
  {
    this._postsService.deletePostById(this.post._id).subscribe(data => {
      console.log(data);
      this._router.navigate(['/dashboard']);
    })
  }

}
