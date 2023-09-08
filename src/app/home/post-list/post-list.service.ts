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
  
   token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliMzI0N2NiLTJlODgtNGViZC1hOTZlLWJlZGI5YTEyYzAzYSIsImlhdCI6MTY5NDAwNzI3MCwiZXhwIjoxNjk0NDM5MjcwfQ.-qwm2Vlcgk-XXx0YCD5hSvANOmEq9RoE_9wjx5KeBjY";

  getPosts(page:number, limit:number) : Observable<any>{

    return this.http.post('/api/post', {'page': page, limit},{
      // headers:{
      //   Authorization: `Bearer ${this.token}`
        
      // }
    });
  }
  
}
