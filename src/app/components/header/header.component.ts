import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('heroBanner', {
    static: false
  }) heroBanner: ElementRef;

  faSearch = faSearch;

  @Input()
  public mainBox: any;

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.heroBanner.nativeElement.style.backgroundImage = "url(" + this.mainBox.image + ")";
  }

}
