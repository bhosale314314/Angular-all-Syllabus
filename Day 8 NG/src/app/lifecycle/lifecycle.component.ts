import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  constructor() {
    console.log("This is contructor method");
   }

  ngOnInit(): void {
    console.log("This is oninit method");
  }

}
