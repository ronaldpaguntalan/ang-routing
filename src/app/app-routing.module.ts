import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { Error404Component } from './error404/error404.component';

const routes:Routes = [
  {path: '', component: HomeComponent },
  {path: 'posts', component: PostListComponent },
  {path: 'post/:id/:title', component: SinglePostComponent }, //two parameters
  {path: '**', component: Error404Component}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
