import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  public sampleString:String = "";
  public link :any;
  public fullName:String = "ganesh";
  constructor() { }

  ngOnInit(): void {
    // Interpolation
    this.sampleString = "Hello Angular ";

    // Attribute Binding
    this.link = "https://www.google.com/";
  }

  showElement(){
    console.log("Hello this is event");
  }

}
