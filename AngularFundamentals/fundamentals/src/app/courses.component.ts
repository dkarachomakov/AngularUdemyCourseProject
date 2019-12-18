import { Component } from '@angular/core';
import { CouresService } from './courses.service';


@Component({
    selector: 'courses',
    template: `<h2>{{ title }}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                </ul>    
                
                <img src="{{ imageUrl }}" />
                <img [src]="imageUrl" />

                <table>
                    <tr>
                        <td [attr.colspan]="colspan"></td>
                    </tr>
                </table>
                <div (click)="onDivSurroundingButtonClick($event)">
                    <button (click)="onButtonClick($event)" class="btn btn-primary" [class.active]="isButtonActive" [style.backgroundColor]="isButtonActive ? 'blue' : 'white'">Save</button>
                </div>
                <input #email (keyup.enter)="onEnterKeyUp($event, email.value)"/>
                
    `
})


export class CoursesComponent{
    title = "List of courses"
    courses;
    imageUrl="https://placekitten.com/420/320"
    colspan=2;
    isButtonActive=true;

    constructor(service: CouresService) {
        this.courses = service.getCourses();
    }

    onButtonClick($event){
        //$event.stopPropagation();
        console.log("The button was clicked", $event);
    }
    onDivSurroundingButtonClick($event){
        console.log("Div was clicked", $event);
    }
    onEnterKeyUp($event, email){
        console.log($event.target.value);
        console.log(email);
    }
}