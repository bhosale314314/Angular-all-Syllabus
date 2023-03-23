import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public age:number= 21;
  showData:boolean = false;
  names:any = ['Yogesh', 'Pradip', 'Sonal', 'Surekha'];
  num:any = 10;
  constructor() { }

  ngOnInit(): void {
  }



}
