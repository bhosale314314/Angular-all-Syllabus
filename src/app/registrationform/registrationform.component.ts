import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
registerForm= new FormGroup({
firstname:new FormControl(""),
lastname:new FormControl(""),
email:new FormControl(""),
Mobile:new FormControl(""),
Gender:new FormControl(""),
pass:new FormControl(""),
cpass:new FormControl(""),


});



registerSubmited(){
  console.log(this.registerForm.value);
}

}
