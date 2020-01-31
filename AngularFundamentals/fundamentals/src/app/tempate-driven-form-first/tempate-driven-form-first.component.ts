import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tempate-driven-form-first',
  templateUrl: './tempate-driven-form-first.component.html',
  styleUrls: ['./tempate-driven-form-first.component.css']
})

export class TempateDrivenFormFirstComponent {

  contactMethods  = [ 
                      { id: 1, name: "Email" },
                      { id: 2, name: "Postal" }
                    ]

  submit(form) {
    console.log(form);
  }
}
