import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({ topics: new FormArray([]) })

  // constructor(fb: FormBuilder) {
  //   this.form = fb.group ({
  //     name: ['', Validators.required],
  //     contact: fb.group({
  //       email: [],
  //       phone: []
  //     }),
  //     topics: fb.array([])
  //   });
  // }

  newTopic(event: any) { 
    console.log(event.target);
    (this.topics as FormArray).push(new FormControl(event.target.value)) ;
    event.target.value="";
  }

  removeTopic(topic: FormControl) {
    let index = (this.topics as FormArray).controls.indexOf(topic);
    (this.topics as FormArray).removeAt(index);
  }

  get topics(){
    return this.form.get('topics');
  }
}
