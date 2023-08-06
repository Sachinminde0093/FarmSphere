import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MarketComponent } from './market/market.component';
import { ProfileComponent } from './profile/profile.component';
import { PostListComponent } from './post-list/post-list.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:PostListComponent
      },
      {
        path:'news',
        component:NewsComponent
      },
      {
        path:'market',
        component:MarketComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'post',
        component:PostListComponent
      },
      {
        path:'createpost',
        component:CreatePostComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
