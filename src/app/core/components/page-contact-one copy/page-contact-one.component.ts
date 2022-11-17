import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-contact-one',
  templateUrl: './page-contact-one.component.html',
  styleUrls: ['./page-contact-one.component.css']
})
export class PageContactOneComponent implements OnInit {

  constructor() { window.scroll({ 
    top: 0, 
    left: 0, 
    //  behavior: 'smooth' 
 });}

  ngOnInit(): void {
  }


}
