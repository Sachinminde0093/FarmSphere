import { Component } from '@angular/core';
import Post from './models/post.model';
import User from '../profile/user.model';
import { PostListService } from './post-list.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent  {

  constructor(private postService: PostListService,private router :Router ) { }

  ngOnInit(): void {
    this.getPost();
  }


   post_list:any[] = [];
  
  pageNumber = 0;
  count = 3;

  getPost(): void {
    this.pageNumber++;
      this.postService.getPosts(this.pageNumber, 1).subscribe(
        (posts:any)=>{
          this.post_list = posts;
          console.log(posts[0].images[0]);
        //   console.log(posts);
        // this.post_list.push(...posts);
        // this.count = this.post_list.length;
        // console.log(this.post_list);
        
        }
      );
  }

  createPost(){
    this.router.navigate(['/home/createpost']);
  }


}
