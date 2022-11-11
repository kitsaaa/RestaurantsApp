import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl: string = ""
  constructor(private http:HttpClient) { }

  signUp(userObj:any){
    return this.http.post<any>('${this.baseUrl}', userObj)

  }

  login(loginObj:any){
    return this.http.post<any>('${this.baseUrl}', loginObj)
    
  }
}
