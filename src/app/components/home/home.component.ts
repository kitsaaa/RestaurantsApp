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

  authenticated = false;

  blogPosts: Array<IPost> | undefined;
  querySub: any;
  sortedPosts: Array<IPost> = [];
  filteredPosts: Array<IPost> = [];
  sortOption: string = '';
  filterOption: string = ''; // New variable for filter option
  filterOpts: any = ['fast-food', 'Sea food', 'Italian', 'Asian', 'mexican']; // New filter options array
  sortOpts: any = ['Name', 'Date']


  constructor(private data: PostsService, private route: ActivatedRoute) { }

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
    if (window.sessionStorage.getItem('authenticated') === '2')
      this.authenticated = true;
    for (let i = 0; i < 5; i++) {
      this.querySub = this.data.getPosts(1).subscribe(data => {
        if (data.length > 0) {
          this.blogPosts = data;
          this.filteredPosts = data;
        }
      });
    }

  }

  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }

  sortPosts() {
    if (this.blogPosts) {
      if (this.sortOption === 'Name') {
        this.sortedPosts = this.blogPosts.sort((a, b) => a.title.localeCompare(b.title));
        console.log(this.sortOption);
      } else if (this.sortOption === 'Date') {
        this.sortedPosts = this.blogPosts.sort((a, b) =>  new Date(a.postDate).toLocaleString().localeCompare(new Date(b.postDate).toLocaleString()));
        console.log(this.sortOption);
      }
    }
  }

  filterPosts() {
    if (this.blogPosts) {
      if (this.filterOption === '') {
        this.filteredPosts = this.blogPosts;
      } else {
        this.filteredPosts = this.blogPosts.filter(post => post.category.toLowerCase() === this.filterOption.toLowerCase());
      }
    }
  }

  onSortChanged($event: string) {
    console.log($event)
    if (this.sortOpts.includes($event)) {
      this.sortOption = $event;
      this.sortPosts();
    } else if (this.filterOpts.includes($event)) {
      this.filterOption = $event;
      this.filterPosts();
    }
  }






}
