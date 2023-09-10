import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Post from '../home/post-list/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostListService {

  constructor(private http:HttpClient) { }
  

  getPosts(page:number, limit:number) : Observable<any>{

    return this.http.post('/api/post', {'page': page, limit},{
      // headers:{
      //   Authorization: `Bearer ${this.token}`
        
      // }
    });
  }

  createPost(title:string, body:string, type:string) : Observable<Post>{

    return this.http.post<Post>('/api/post/create', {title: title, body:body, type:type});
  }
  
}


