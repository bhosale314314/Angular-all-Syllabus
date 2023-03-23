import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';

  constructor(private router: Router){

  }

  naviagteToStaff(){
    // console.log("Hello comp");

    /// business logic goes here
    // based on business logic we can navigate to another component using router.navigate.

    // this.router.navigate(['staff']);

    this.router.navigateByUrl('staff');



  }
}
