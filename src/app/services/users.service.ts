import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './User'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  data: any;

  constructor(private http: HttpClient) { }

  getPosts(page: number): Observable<IUser[]> {
    this.data = this.http.get<IUser[]>("https://restaurants-app-users-api.herokuapp.com/api/posts?page=" + page + "&perPage=100");
    console.log(this.data);
    return this.data;
  }

  getPostById(id: number): Observable<IUser> {
    return this.http.get<IUser>("https://restaurants-app-users-api.herokuapp.com/api/posts" + id);
  }

  newPost(data: IUser): Observable<any> {
    return this.http.post<any>(`https://restaurants-app-users-api.herokuapp.com/api/posts`, data);
  }

  updatePostById(id: string, data: IUser): Observable<any> {
    return this.http.put<any>(`https://restaurants-app-users-api.herokuapp.com/api/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://restaurants-app-users-api.herokuapp.com/api/posts/${id}`);
  }
}
