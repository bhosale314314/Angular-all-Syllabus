import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  isSubmitted:boolean= false;
  myForm:any;
  count:any= 5000;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      fname:['Mandar',[Validators.required]],
      lname:['', [Validators.maxLength(5)]],
      email:['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      pass:[''],
      cpass:['']
    })
  }

  onSubmitForm(){
    console.log(this.myForm);
    console.log(this.myForm.value);
    this.isSubmitted= true;
  }

  get f(){
    return this.myForm.controls;
  }
}
