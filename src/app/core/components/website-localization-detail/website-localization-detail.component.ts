import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-localization-detail',
  templateUrl: './website-localization-detail.component.html',
  styleUrls: ['./website-localization-detail.component.css']
})
export class WebsiteLocalizationDetailComponent implements OnInit {

  constructor() {window.scroll({ 
    top: 0, 
    left: 0, 
    //  behavior: 'smooth' 
 }); }

  ngOnInit(): void {
  }

}
