import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
//angular material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import { SearchService } from './services/search/search.service';
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './details/details.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'details/:namecitycounty/:index', component: DetailsComponent },
    ],
      { useHash: false }
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMUq9n8z6pmRWIhiBtG0nQZIsz5F5lzcA'
    })
  ],
  
  providers: [SearchService, MatDatepickerModule,GoogleMapsAPIWrapper],
  bootstrap: [AppComponent],
})
export class AppModule { }
