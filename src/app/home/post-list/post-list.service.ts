import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Post from './models/post.model';
import { User } from 'src/app/models/user.model';

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
  
}
