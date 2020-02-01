import { Component, OnInit } from '@angular/core';
import data from '../content.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  jsonData:any = data;

  constructor() { }

  ngOnInit() {
  }
}
