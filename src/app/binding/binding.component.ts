import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  public sampleString: String="";
  public fullname:string="sachin";
  public link:any;

  constructor() { }

  ngOnInit(): void {
    //interpolation
    this.sampleString="Angular Interpolatio";
    
    // Attribute Binding
    this.link="https://www.youtube.com/";


  }

  showElement(){
    console.log("Hello this is Event");
  }

}
