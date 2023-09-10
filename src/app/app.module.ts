import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
