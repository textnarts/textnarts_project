import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-terms',
  templateUrl: './page-terms.component.html',
  styleUrls: ['./page-terms.component.css']
})
export class PageTermsComponent implements OnInit {

  constructor() {window.scroll({ 
    top: 0, 
    left: 0, 
    //  behavior: 'smooth' 
 }); }

  ngOnInit(): void {
  }

}
