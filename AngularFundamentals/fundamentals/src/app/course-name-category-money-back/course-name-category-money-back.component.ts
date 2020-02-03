import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-name-category-money-back',
  templateUrl: './course-name-category-money-back.component.html',
  styleUrls: ['./course-name-category-money-back.component.css']
})
export class CourseNameCategoryMoneyBackComponent {
  categories = [ 
                  {id: 1, name: "Development"},
                  {id: 2, name: "Art"},
                  {id: 3, name: "Languages"}
                ];

  submit(course) {
    console.log(course);
  }
}
