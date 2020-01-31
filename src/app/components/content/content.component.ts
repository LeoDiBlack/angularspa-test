import { Component, OnInit } from '@angular/core';
import data from '../../../content.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  json:any = data;
  constructor() { }

  ngOnInit() {
    console.log(this.json);
  }

}
