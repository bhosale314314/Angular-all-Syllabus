import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // public dataFromParentToChild:any;
  public dataFromChildToParent:any;

  @ViewChild(ChildComponent) childComp:any;
  public dataWithViewChild:any;

  constructor() {
    console.log(this.childComp);
    this.dataFromParentToChild= "This is the data from Parent to Child";
   }

  ngOnInit(): void {
    console.log(this.childComp);
  }

  
  ngAfterViewInit(){
    setTimeout(() => {
      console.log(this.childComp.dataFromChildToParentUsingViewChild);
    this.dataWithViewChild = this.childComp.dataFromChildToParentUsingViewChild;
    // console.log(this.childComp.dataFromChildToParent);
    this.childComp.executeFun();
    }, 1000);
    
  }

  emitDataFromChild(ev:any){
    console.log("Hello");
    console.log(ev);
    this.dataFromChildToParent= ev;
  }

}
