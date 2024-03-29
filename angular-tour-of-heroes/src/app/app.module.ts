import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerInitialComponent } from './banner-initial/banner-initial.component';
import { BannerExternalComponent } from './banner-external/banner-external.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    AboutComponent,
    BannerComponent,
    DashboardComponent,
    BannerInitialComponent,
    BannerExternalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }