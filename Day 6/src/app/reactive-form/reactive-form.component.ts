import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  myForm:any;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      fname:[''],
      lname:[''],
      email:[''],
      pass:[''],
      cpass:['']
    })
  }

  onSubmitForm(){
    console.log(this.myForm);
    console.log(this.myForm.value);
  }
}
