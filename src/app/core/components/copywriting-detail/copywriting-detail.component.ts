import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copywriting-detail',
  templateUrl: './copywriting-detail.component.html',
  styleUrls: ['./copywriting-detail.component.css']
})
export class CopywritingDetailComponent implements OnInit {

  constructor() { window.scroll({ 
    top: 0, 
    left: 0, 
    //  behavior: 'smooth' 
 });}

  ngOnInit(): void {
  }

}
