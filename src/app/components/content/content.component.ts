import { Component, OnInit, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  faTimes = faTimes;

  @Input()
  public contentBoxes: any;

  constructor() { }

  ngOnInit() {

  }

}
