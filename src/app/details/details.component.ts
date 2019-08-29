import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  lat: number ;
  lng: number ;
  zoom: number ;

  celat: number;
  celng: number;
  cezoom: number;

  index: string;
  detailcontent: any;
  deathdate: string;
  chmap: string;
  cemap: string;
  firstname: string;
  lastname: string;
  towncounty: string;
  description: string;
  chlocname: string;
  celocname: string;


  
  constructor(private _searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.index = this.route.snapshot.paramMap.get('index');
    this._searchService.getdetail(this.index).subscribe(
      (res) => {
        // console.log(res);
        this.detailcontent = res['status'];
        console.log(this.detailcontent);
        this.deathdate = this.detailcontent.deathdate;
        this.chmap = this.detailcontent.chtype;
        this.cemap = this.detailcontent.cetype;

        this.firstname = this.detailcontent.firstname;
        this.lastname = this.detailcontent.lastname;
        this.towncounty = this.detailcontent.towncounty;
        this.description = this.detailcontent.description;
        this.chlocname = this.detailcontent.chlocname;
        this.celocname = this.detailcontent.celocname;
        
        this.lat = parseFloat(this.detailcontent.chlat);
        this.lng = parseFloat(this.detailcontent.chlon);
        this.zoom = parseFloat(this.detailcontent.chzoom);

        this.celat = parseFloat(this.detailcontent.celat);
        this.celng = parseFloat(this.detailcontent.celon);
        this.cezoom = parseFloat(this.detailcontent.cezoom);
        
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
