import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData:any;


  @Output() itemEvent12 = new EventEmitter<any>();
  public dataFromChildToParent:any ="This is the data from child to parent";


  dataFromChildToParentUsingViewChild:any;
  constructor() {
    // console.log(this.parentData);
    this.dataFromChildToParentUsingViewChild = "This is the data from child to parent using viewChild";
   }

  ngOnInit(): void {
    console.log(this.parentData);
  }

  sendDataFromPar(){
    this.itemEvent12.emit(this.dataFromChildToParent);
  }

  executeFun(){
    console.log("Hello this function will be called from parent with the help of viewchild");
  }

}
