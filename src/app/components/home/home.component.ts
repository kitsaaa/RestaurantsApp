import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/services/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  blogPosts: Array<IPost> | undefined;
  querySub : any;
  constructor(private data: PostsService,private route : ActivatedRoute) { }

  getPage(num: number) {
    this.querySub = this.data.getPosts(num).subscribe(data => {
      if (data.length > 0) {
        this.blogPosts = data;
      }
    });
  }
  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      this.getPage(+params['page'] || 1);
      });
  }

ngOnDestroy()
{
  if(this.querySub) this.querySub.unsubscribe();
}
}
