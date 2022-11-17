import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-localization-detail',
  templateUrl: './app-localization-detail.component.html',
  styleUrls: ['./app-localization-detail.component.css']
})
export class AppLocalizationDetailComponent implements OnInit {

  constructor() {window.scroll({ 
    top: 0, 
    left: 0, 
    //  behavior: 'smooth' 
 }); }

  ngOnInit(): void {
  }

}
