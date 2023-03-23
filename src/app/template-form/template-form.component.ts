import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  
 courses=['BE','BCA','MCA','B-TECH','B-COM'];

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitForm(frm:any){
    console.log(frm.value);
    console.log(frm.value.email);
  }
}
