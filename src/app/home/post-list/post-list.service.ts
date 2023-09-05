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
  
   token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMGU3ZjZjLTFkZWItNDI2ZS1iN2ZmLWFmYTlkYzMyZGI0OCIsImlhdCI6MTY5Mzc1MDgyMSwiZXhwIjoxNjk0MTgyODIxfQ.Sd1xknPsQPq0qHzWeoFMIc0-698W5S6ND_4DcI9_3oA";

  getPosts(page:number, limit:number) : Observable<any>{

    return this.http.post('/api/post', {'page': page, limit},{
      headers:{
        Authorization: `Bearer ${this.token}`
        
      }
    });
  }
  
}
