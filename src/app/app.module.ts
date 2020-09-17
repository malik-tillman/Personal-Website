import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { ThreeComponent } from './three/three.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router'
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client'


@NgModule({
  declarations: [
    AppComponent,
    ThreeComponent,
    HeaderComponent,
    HomeComponent,
    ProjectComponent,
    WorksComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    LoaderComponent,
    SocialIconsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    LazyLoadImageModule,
    LoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
