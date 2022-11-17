import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-writing-detail',
  templateUrl: './content-writing-detail.component.html',
  styleUrls: ['./content-writing-detail.component.css']
})
export class ContentWritingDetailComponent implements OnInit {

  constructor() { window.scroll({ 
    top: 0, 
    left: 0, 
    //  behavior: 'smooth' 
 });}

  ngOnInit(): void {
  }

}
