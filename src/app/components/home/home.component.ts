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
 
  blogPosts: Array<IPost> = [];
  sortedPosts: Array<IPost> = [];
  sortOption: string = '';
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

sortPosts() {
  if (this.sortOption === 'Name') {
    this.sortedPosts = this.blogPosts.sort((a, b) => a.title.localeCompare(b.title));
    console.log(this.sortOption);
  } else if (this.sortOption === 'Date') {
    this.sortedPosts = this.blogPosts.sort((a, b) => new Date(a.postDate).getTime() - new Date(b.postDate).getTime());
    console.log(this.sortOption);
  }
}
onSortChanged(sortOption: string) {
  this.sortOption = sortOption;
  this.sortPosts();
}

}
