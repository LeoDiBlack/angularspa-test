import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import {
  faThumbsUp,
  faThumbsDown
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss']
})
export class ContentBoxComponent implements OnInit {

  @ViewChild('rowThumbs', {
    static: false
  }) rowThumbsElement: ElementRef;

  @ViewChild('containerBox', {
    static: false
  }) containerBox: ElementRef;

  @Input()
  public contentBoxContent: any;
  public thumbsUpPercentage: any = 0;
  public thumbsDownPercentage: any = 0;
  public thumbSelection: any;
  public voted: boolean;
  private contentIdThumbsUpVotes;
  private contentIdThumbsDownVotes;
  private thumbsUpVotes;
  private thumbsDownVotes;

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.contentIdThumbsUpVotes = this.contentBoxContent.id + 'ThumbsUp';
    this.contentIdThumbsDownVotes = this.contentBoxContent.id + 'ThumbsDown';
    if (localStorage.getItem(this.contentIdThumbsUpVotes) === null) {
      localStorage.setItem(this.contentIdThumbsUpVotes, this.contentBoxContent.thumbsUp);
    }
    if (localStorage.getItem(this.contentIdThumbsDownVotes) === null) {
      localStorage.setItem(this.contentIdThumbsDownVotes, this.contentBoxContent.thumbsDown);
    }
    this.thumbsUpVotes = parseInt(localStorage.getItem(this.contentIdThumbsUpVotes));
    this.thumbsDownVotes = parseInt(localStorage.getItem(this.contentIdThumbsDownVotes));
  }

  ngAfterViewInit() {
    this.containerBox.nativeElement.style.backgroundImage = "url(" + this.contentBoxContent.image + ")";
    this.setThumbsPercentage();
  }

  ngAfterViewChecked() {
    //your code to update the model
    this.cdr.detectChanges();
  }

  calcThumbs(): void {
    if (this.thumbSelection === 'faThumbsUp') {
      this.thumbsUpVotes++;
    } else if (this.thumbSelection === 'faThumbsDown') {
      this.thumbsDownVotes++;
    }
    this.thumbSelection = '';
    this.voted = true;
    this.setThumbsPercentage();
  }

  setThumbsPercentage(): void {
    let thumbsUpPercentage;
    let thumbsDownPercentage;

    localStorage.setItem(this.contentIdThumbsUpVotes, this.thumbsUpVotes);
    localStorage.setItem(this.contentIdThumbsDownVotes, this.thumbsDownVotes);

    this.thumbsUpPercentage = thumbsUpPercentage = Math.round((this.thumbsUpVotes / (this.thumbsUpVotes + this.thumbsDownVotes)) * 100);
    this.thumbsDownPercentage = thumbsDownPercentage = Math.round(100 - thumbsUpPercentage);

    this.rowThumbsElement.nativeElement.lastChild.style.maxWidth = thumbsDownPercentage + '%';
    this.rowThumbsElement.nativeElement.lastChild.style.flexBasis = thumbsDownPercentage + '%';
    this.rowThumbsElement.nativeElement.firstChild.style.maxWidth = thumbsUpPercentage + '%';
    this.rowThumbsElement.nativeElement.firstChild.style.flexBasis = thumbsUpPercentage + '%';
  }

}