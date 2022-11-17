import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translation-detail',
  templateUrl: './translation-detail.component.html',
  styleUrls: ['./translation-detail.component.css']
})
export class TranslationDetailComponent implements OnInit {

  constructor() { 	window.scroll({ 
    top: 0, 
    left: 0, 
    //  behavior: 'smooth' 
 });}

  ngOnInit(): void {
  }

}
