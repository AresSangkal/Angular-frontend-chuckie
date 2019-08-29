import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search/search.service';
import { PaginatedSearch } from '../model/paginated-search.model';
import { MapsAPILoader } from '@agm/core';
import { google } from "google-maps";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  dateFrom: any;
  dateTo: any;
  firstname: any;
  lastname: any;
  neename: any;
  town: any;
  county: any;
  errMsg: string;
  results: any;
  bookings: PaginatedSearch;

  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  
  constructor(private _searchService: SearchService, private router: Router,private mapsAPILoader: MapsAPILoader) {
  }



  // ngOnInit() {
  //   this.setCurrentLocation();
  // }
 
  //   // Get Current Location Coordinates
  //   private setCurrentLocation() {
  //     if ('geolocation' in navigator) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
  //         this.latitude = position.coords.latitude;
  //         this.longitude = position.coords.longitude;
  //         this.zoom = 15;
  //         console.log(position)
  //       }, (err) => { console.log(err)});
  //     }
  //   }






  ngOnInit() {
    console.log("Start Init Function now");
    this.mapsAPILoader.load().then(() => {
      console.log("mapApiloader is started now.");
      this.geoCoder = new google.maps.Geocoder;
      this.setCurrentLocation();
    });

    
  }

// Get Current Location Coordinates
  private setCurrentLocation() {
    
    if ('geolocation' in navigator) {
      console.log("Get Current Location coordinates STARTED");
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("START navigator in setcurrnetlocation");
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        console.log(this.latitude,this.longitude);
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          console.log('This is SUCCESS of GET USER ADDRESS');
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
 
    });
  }

  SubmitForm() {
    if (!this.dateFrom) this.dateFrom = '';
    if (!this.dateTo) this.dateTo = '';
    if (!this.firstname) this.firstname = '';
    if (!this.lastname) this.lastname = '';
    if (!this.neename) this.neename = '';
    if (!this.town) this.town = '';
    if (!this.county) this.county = '';
    this._searchService.search(this.firstname, this.lastname, this.neename, this.town, this.county, this.dateFrom, this.dateTo).subscribe(
      (res) => {
        this.bookings = res['status'];
        console.log(this.bookings);
      },
      (err) => {
        console.log('This is error of search', err);
        if (err.error) {
          this.errMsg = err.error.error;
        } else {
          this.errMsg = 'Invalid credentials.';
        }
      }
    );

  }
  prevPage() {
    this._searchService.getSearchAtUrl(this.bookings.prev_page_url).subscribe(
      (res) => {
        this.bookings = res['status'];
        console.log(this.bookings);
      },
      (err) => {
        console.log('This is error of search', err);
        if (err.error) {
          this.errMsg = err.error.error;
        } else {
          this.errMsg = 'Invalid credentials.';
        }
      }
    );
  }
  nextPage() {
    this._searchService.getSearchAtUrl(this.bookings.next_page_url).subscribe(
      (res) => {
        this.bookings = res['status'];
        console.log(this.bookings);
      },
      (err) => {
        console.log('This is error of search', err);
        if (err.error) {
          this.errMsg = err.error.error;
        } else {
          this.errMsg = 'Invalid credentials.';
        }
      }
    );
  }

}
