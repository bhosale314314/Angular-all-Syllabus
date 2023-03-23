import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }
  test1:string= "angular pipes";
  student = {
    fname: 'Alex',
    lname: 'Simi',
    age: 25
  };
  date = new Date();
  salary = 10000;
  ngOnInit(): void {
  }

}
