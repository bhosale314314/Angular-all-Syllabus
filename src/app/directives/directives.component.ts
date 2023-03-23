import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  //Structural Directives
  public mark:number=90;
  showData:boolean=true;
  country:any=['INDIA','AUS','JAPAN','US','CHINA'];
  public num=1;
  //Attribute Directives
  myClass1:any;
  myClass2:any;
  myStyle:any={'color':'black', 'font-size': '20px', 'background-color': 'red','border-radius':'5px'};
  myClass3:any='test3';




  constructor() { }

  ngOnInit(): void {

    if(this.mark>95){
      this.myClass1="test1";
    }
    else{
      this.myClass1="test2"
    }
  }

}
