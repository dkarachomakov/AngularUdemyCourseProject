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

  courseObjects;

  onLoadCourses(){
    this.courseObjects = [
      { id: 1, name: 'Course1' },
      { id: 2, name: 'Course2' },
      { id: 3, name: 'Course3' },
      { id: 4, name: 'Course4' },
      { id: 5, name: 'Course5' },
      { id: 6, name: 'Course6' },
      { id: 7, name: 'Course7' }
    ];
  }

  trackCourseById(index, course){
    return course ? course.Id: undefined;
  }

  onAdd(){
    let newId = this.courseObjects[this.courseObjects.length-1].id + 1;
    this.courseObjects.push({ id: newId, name: "Course"+newId });
  }

  onRemove(course){
    this.courseObjects.splice(this.courseObjects.indexOf(course), 1);
  }

  onUpdate(course){
    course.name += " Updated";
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed', eventArgs);
  }
}
