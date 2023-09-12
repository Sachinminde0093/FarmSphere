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
        // this.post_list.push(...posts);
        // this.count = this.post_list.length;
        // console.log(this.post_list);
        
        }
      );
  }

  getElapsedTime(post_date: string): string {
    const currentDate = new Date();
    const postDate = new Date(post_date);

    const timeDifference = currentDate.getTime() - postDate.getTime();

    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44)); // Average number of days in a month
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25)); // Average number of days in a year
    console.log(minutes, hours, days, months, years);
    if (years > 0) {
      return years === 1 ? "1 year ago" : years + " years ago";
    } else if (months > 0) {
      return months === 1 ? "1 month ago" : months + " months ago";
    } else if (days > 0) {
      return days === 1 ? "1 day ago" : days + " days ago";
    } else if (hours > 0) {
      return hours === 1 ? "1 hour ago" : hours + " hours ago";
    } else {
      return minutes === 1 ? "1 minute ago" : minutes + " minutes ago";
    }
  }

  createPost(){
    this.router.navigate(['/home/createpost']);
  }


}
