import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transcreation-detail',
  templateUrl: './transcreation-detail.component.html',
  styleUrls: ['./transcreation-detail.component.css']
})
export class TranscreationDetailComponent implements OnInit {

  constructor() {window.scroll({ 
    top: 0, 
    left: 0, 
    //  behavior: 'smooth' 
 }); }

  ngOnInit(): void {
  }

}
