import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite',
  template: `
                    <i class='fa-star' [class.fas]="isFavorite" [class.far]="!isFavorite" (click)="onClick();"></i>
                    favourite 2
                    <i class='fa-star' [ngClass]="{'class.fas': isFavorite, 'class.far': !isFavorite}" (click)="onClick();"></i>
  `,

})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite = false;
  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }
}


export class FavoriteChangedEventArgs{
  newValue: boolean;
}