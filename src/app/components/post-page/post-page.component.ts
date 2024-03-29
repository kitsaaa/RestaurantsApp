import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/services/Post';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { IComment } from 'src/app/services/Comment';
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit, OnDestroy {

  authenticated = false;
  
  @Input('post')
  post: IPost | undefined;
  querySub: any;
  routeSub: any;
  updateSub: any;
  commentName!: string;
  commentText!: string;
  userID!: string;
  commentMatches: boolean[] = []
  editMode: boolean = false;
  rating = 0;


  constructor(private postService: PostsService, private route: ActivatedRoute) { }
  submitComment(f: NgForm){
    if(f.valid && this.post){
      this.post.comments.push({
        author: this.commentName,
        comment: this.commentText,
        // date: new Date().toLocaleString(),
        userID: this.userID
      });
      this.updateSub = this.postService.updatePostById(this.post._id, this.post).subscribe();
      f.reset();
    }
  }

  deleteClicked(aComment: IComment) {
    console.log(aComment);
    if (this.post) {
      for (let i = 0; i < this.post.comments.length; i++) {
        if (this.post.comments[i] === aComment)
          delete this.post.comments[i];
        console.log(this.post.comments)
        let newComments = this.post.comments.filter((comment) => comment !== null);
        this.post.comments = newComments;
        
      }
      this.updateSub = this.postService.updatePostById(this.post._id, this.post).subscribe();
    }

  }
  updateRating(value: number) {
    if (this.post) {
     // Convert the values to numbers to ensure correct arithmetic
     const currentRating = parseFloat(this.post.rating as any) || 0;
     const currentNumberOfRatings = parseInt(this.post.numberOfRatings as any) || 0;
 
     // Calculate the new rating and increment the number of ratings
     const newNumberOfRatings = currentNumberOfRatings + 1;
     const newRating = ((currentRating * currentNumberOfRatings) + value) / newNumberOfRatings;
 
     // Update the post object with the new values
     this.rating = value;
     this.post.numberOfRatings = newNumberOfRatings;
     this.post.rating = newRating;
 
     this.updateSub = this.postService.updatePostById(this.post._id, this.post).subscribe();
    }
  }
  ngOnInit(): void {

    if (window.localStorage.getItem('authenticated') != '0')
      this.authenticated = true;
    if (this.authenticated) {
      this.userID = window.localStorage.getItem('currentUserID') || '{}';
    }
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

  editClicked() {
    this.editMode = true;
  }

  saveClicked(aComment: IComment) {
    
    // if (this.post) {
    //   for (let i = 0; i < this.post.comments.length; i++) {
    //     if (this.post.comments[i] === aComment) {
    //       this.post.comments[i].comment = this.edit;
    //     }
    //       // this.post.comments[i].comment = (<HTMLInputElement>document.getElementById('edit')).value;
        
    //   }
    //   this.editMode = false;
    // }
    if (this.post) {
      this.editMode = false;
      this.updateSub = this.postService.updatePostById(this.post._id, this.post).subscribe();
    }
    

  }
}
