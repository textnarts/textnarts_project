import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transcription-detail',
  templateUrl: './transcription-detail.component.html',
  styleUrls: ['./transcription-detail.component.css']
})
export class TranscriptionDetailComponent implements OnInit {

  constructor() { window.scroll({ 
    top: 0, 
    left: 0, 
    //  behavior: 'smooth' 
 });}

  ngOnInit(): void {
  }

}
