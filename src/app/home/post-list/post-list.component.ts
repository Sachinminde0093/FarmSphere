import { Component } from '@angular/core';
import Post from './models/post.model';
import { PostListService } from './post-list.service';
import User from '../profile/user.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent  {

  constructor(private postService: PostListService) { }

  ngOnInit(): void {
    this.getPost();
  }


   post_list:any[] = [];
     // [
  //   {
  //     postId: "string",
  //     user: {
  //       userId: '1',
  //       userImage: 'https://www.vaccinetours.com/wp-content/uploads/2021/09/Vegetable-Cultivation-in-The-Field%E2%80%93-In-India-Farming-Info.jpg',
  //       userName: 'Sachin Minde'
  //     },
  //     type: "text",
  //     title: 'HOT CLIMATE APPLE PLANTS AVAILABLE',
  //     body: `Anna and HRMN99 both Variety available
  //     Suitable for hot climate weather 🍎🍏🍎 DELIVERY AVAILABLE for all over India🤝🤝🤝
  //     ** Retail price - 100 only 
  //     For Wholesale price please contact to 9015028946
  //     😊😊
  //     ** All over India doorstep delivery available
  //     or Call or whatsapp  
  //     +91  090150 28946 `,
  //     like: 10,
  //     share: 20,
  //     createdAt: new Date()
  //   },

  //   {
  //     postId: "string",
  //     user: {
  //       userId: '2',
  //       userImage: 'https://www.vaccinetours.com/wp-content/uploads/2021/09/Vegetable-Cultivation-in-The-Field%E2%80%93-In-India-Farming-Info.jpg',
  //       userName: 'Abhishek Gund'
  //     },
  //     type: 'image',
  //     title: 'HOT CLIMATE APPLE PLANTS AVAILABLE',
  //     body: `Anna and HRMN99 both Variety available
  //     Suitable for hot climate weather 🍎🍏🍎 DELIVERY AVAILABLE for all over India🤝🤝🤝
  //     ** Retail price - 100 only 
  //     For Wholesale price please contact to 9015028946
  //     😊😊
  //     ** All over India doorstep delivery available
  //     or Call or whatsapp  
  //     +91  090150 28946 `,
  //     imageUrl: 'https://www.vaccinetours.com/wp-content/uploads/2021/09/Vegetable-Cultivation-in-The-Field%E2%80%93-In-India-Farming-Info.jpg',
  //     like: 10,
  //     share: 20,
  //     createdAt: new Date()
  //   },

  //   {
  //     postId: "string",
  //     user: {
  //       userId: '3',
  //       userImage: 'https://www.vaccinetours.com/wp-content/uploads/2021/09/Vegetable-Cultivation-in-The-Field%E2%80%93-In-India-Farming-Info.jpg',
  //       userName: ''
  //     },
  //     type: 'video',
  //     title: 'HOT CLIMATE APPLE PLANTS AVAILABLE',
  //     body: `Anna and HRMN99 both Variety available
  //     Suitable for hot climate weather 🍎🍏🍎 DELIVERY AVAILABLE for all over India🤝🤝🤝
  //     ** Retail price - 100 only 
  //     For Wholesale price please contact to 9015028946
  //     😊😊
  //     ** All over India doorstep delivery available
  //     or Call or whatsapp  
  //     +91  090150 28946 `,
  //     videourl: 'https://youtu.be/pRpeEdMmmQ0',
  //     like: 10,
  //     share: 20,
  //     createdAt: new Date()
  //   },
  // ]

  pageNumber = 0;
  count = 3;

  getPost(): void {
    this.pageNumber++;
      this.postService.getPosts(this.pageNumber, 1).subscribe(
        (posts)=>{
          this.post_list = posts;
          console.log(posts[0].images[0]);
        //   console.log(posts);
        // this.post_list.push(...posts);
        // this.count = this.post_list.length;
        // console.log(this.post_list);
        
        }
      );
  }


}
