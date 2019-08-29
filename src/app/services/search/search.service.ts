import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public results: any;
  private serverUrl = environment.serverUrl;
  // private autolocationUrl = environment.autolocationUrl;

  constructor(private http: HttpClient, private router: Router) { }

  public search(firstname: string, lastname: string, neename: string, town: string, county: string, dateFrom: Date, dateTo: Date) {
    console.log('services search action');
    const url = `${this.serverUrl}` + '/api/search';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(firstname, lastname, neename, town, county, dateFrom, dateTo);
    return this.http.post(url, { 'firstname': firstname, 'lastname': lastname, 'neename': neename, 'town': town, 'county': county, 'date_from': dateFrom, 'date_to': dateTo }, httpOptions)
  };

  public getSearchAtUrl(url: string) {
    console.log('services search action pagination');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url, httpOptions);
  };

  public getdetail(index:string){
    console.log('services search action detail');
    const url = `${this.serverUrl}` + '/api/detail';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url, {'index': index}, httpOptions);
  }

    

}

