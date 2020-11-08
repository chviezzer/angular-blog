import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

 
import { RootComponent } from './root/root.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { AddPostComponent } from './components/add-post/add-post.component';

import { CommonService } from './services/common.service';



@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent,
    ViewPostComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService ],
  bootstrap: [RootComponent]
})
export class AppModule { }
