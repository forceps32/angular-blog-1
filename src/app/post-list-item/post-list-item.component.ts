import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postcreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }
  
  getColor() {
    if(this.postLoveIts > 0) {
      return 'green';
    } else if(this.postLoveIts < 0) {
      return 'red';
    }
  }
  
  onLoving() {
    this.postLoveIts++;
    console.log(this.postLoveIts + ' like');
  }
  
  onNotLoving() {
    this.postLoveIts-- ;
    console.log(this.postLoveIts + ' like');
  }

}
