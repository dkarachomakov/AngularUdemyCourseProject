import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('likesCount') likesCount: number;
  @Input('isLiked') isLiked: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.likesCount += this.isLiked ? -1 : 1;
    this.isLiked = !this.isLiked;
  }

}
