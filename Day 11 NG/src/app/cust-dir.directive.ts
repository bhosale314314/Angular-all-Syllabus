import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustDir]'
})
export class CustDirDirective {

  constructor(private ele: ElementRef) {
    
    this.ele.nativeElement.style.background ="skyblue";
    this.ele.nativeElement.style.color ="red";
   }

}
