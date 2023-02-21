import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/services/Post';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit, OnDestroy {
  @Input('post')
  post: IPost | undefined;
  querySub: any;
  routeSub: any;
  updateSub: any;

  commentName!: string;
  commentText!: string;

  constructor(private postService: PostsService, private route: ActivatedRoute) { }
  submitComment(f: NgForm){
    if(f.valid && this.post){
      this.post.comments.push({
        author: this.commentName,
        comment: this.commentText,
        date: new Date().toLocaleString()
      });
      this.updateSub = this.postService.updatePostById(this.post._id, this.post).subscribe();
      f.reset();
    }
}
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params=>{
      this.querySub = this.postService.getPostById(params['_id']).subscribe(data=>{
        this.post = data;
        this.post.views++;
        this.updateSub = this.postService.updatePostById(this.post._id, this.post).subscribe();
      });
    });
  }

  ngOnDestroy(): void {
    if(this.querySub){
      this.querySub.unsubscribe();
    }
    if(this.routeSub){
      this.routeSub.unsubscribe();
    }
  }
}
