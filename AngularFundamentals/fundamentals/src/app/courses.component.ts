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
                <img [src]="imageUrl" />                                                                <!-- This is the right way -->

                <table>
                    <tr>
                        <td [attr.colspan]="colspan"></td>
                    </tr>
                </table>
                <div (click)="onDivSurroundingButtonClick($event)">
                    <button (click)="onButtonClick($event)" class="btn btn-primary" [class.active]="isButtonActive" [style.backgroundColor]="isButtonActive ? 'blue' : 'white'">Save</button>
                </div>
                <input #email (keyup.enter)="onEnterKeyUp($event, email.value)"/>
                <div>
                    <input [value]="emailModelBinding" (keyup.enter)=" emailModelBinding=$event.target.value; onEnterKeyUpModelBinding()"/>
                </div>
                <div>
                    <input [(ngModel)]="emailModelBinding" (keyup.enter)="onEnterKeyUpModelBinding()"/>     <!-- This is the right way -->
                </div>

                {{ singleCourse.title | uppercase | lowercase }} <br/>
                {{ singleCourse.students | number }} <br/>
                {{ singleCourse.rating | number:'1.2-2'}} <br/>
                {{ singleCourse.price | currency:'EUR':true }} <br/>
                {{ singleCourse.releaseDate | date:'shortDate' }} <br/>

                {{ someTextToSummerize|summary:'50' }}
    `
})


export class CoursesComponent{
    title = "List of courses"
    courses;
    imageUrl="https://placekitten.com/420/320"
    colspan=2;
    isButtonActive=true;
    emailModelBinding = 'alabala@balaala.com';

    someTextToSummerize = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '

    singleCourse = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

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

    onEnterKeyUpModelBinding(){
        console.log(this.emailModelBinding);
    }
}