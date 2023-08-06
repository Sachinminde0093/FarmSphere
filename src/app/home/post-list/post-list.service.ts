import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Post from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostListService {

  constructor(private http:HttpClient) { }

  getPosts(page:number) : Observable<Post[]>{
    return this.http.post<Post[]>('/api/post', {'page': page},);
  }
  
}
