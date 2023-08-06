import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MarketComponent } from './market/market.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { NgModel } from '@angular/forms';


@NgModule({
  declarations: [
    PostListComponent,
    NewsComponent,
    HomeComponent,
    ProfileComponent,
    MarketComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class HomeModule { }
