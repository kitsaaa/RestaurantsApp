import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './Post'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  data: any;

  constructor(private http: HttpClient) { }

  getPosts(page: number): Observable<IPost[]> {
    this.data = this.http.get<IPost[]>("https://restaurants-app-posts-ap-ivercel.vercel.app/api/posts?page=" + page + "&perPage=100");
    console.log(this.data);
    return this.data;
  }

  getPostById(id: string): Observable<IPost> {
    return this.http.get<IPost>(`https://restaurants-app-posts-ap-ivercel.vercel.app/api/posts/${id}`);
  }

  newPost(data: IPost): Observable<any> {
    return this.http.post<any>(`https://restaurants-app-posts-ap-ivercel.vercel.app/api/posts`, data);
  }

  updatePostById(id: string, data: IPost): Observable<any> {
    return this.http.put<any>(`https://restaurants-app-posts-ap-ivercel.vercel.app/api/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://restaurants-app-posts-ap-ivercel.vercel.app/api/posts/${id}`);
  }
}
