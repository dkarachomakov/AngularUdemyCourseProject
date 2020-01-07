import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fundamentals';

  post = {
    title: "Some Title",
    isFavorite: true,
  }

  tweet = {
    Body: "Some body",
    isLiked: false,
    likesCount: 3
  }

  courses = [1,2];
  viewMode = 'map';

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed', eventArgs);
  }
}
