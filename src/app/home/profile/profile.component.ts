import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import User from './user.model';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { PostListService } from '../post-list/post-list.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private profileService: ProfileService, private postService: PostListService) {}

  user: User | null = null;

  ngOnInit(): void {
    this.getUser();
  }

  post_list: any[] = [];

  pageNumber = 0;
  count = 3;

  getUser(): void {
    this.pageNumber++;
    this.profileService.getUser().subscribe(
      (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
      }
    );
  }

  

}