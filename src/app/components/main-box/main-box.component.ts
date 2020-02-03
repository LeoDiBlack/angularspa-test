import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main-box',
  templateUrl: './main-box.component.html',
  styleUrls: ['./main-box.component.scss']
})
export class MainBoxComponent implements OnInit {

  @ViewChild('mainBoxBanner', {
    static: false
  }) mainBoxBanner: ElementRef;

  faWikipediaW = faWikipediaW;

  @Input()
  public mainBoxContent: any;

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    //this.mainBoxBanner.nativeElement.style.backgroundImage = "url(" + this.mainBoxContent.image + ")";
  }

}
