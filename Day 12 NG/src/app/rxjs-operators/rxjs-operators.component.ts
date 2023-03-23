import { Component, OnInit } from '@angular/core';
import { filter, from, map, of, pipe } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor() {

   }
  dataStream: any;
  ngOnInit(): void {
    this.dataStream = from([1,2,3,4,5]);
    console.log(this.dataStream);

    // this.dataStream = of(1,2,3,4,5);
    // console.log(this.dataStream);


    this.dataStream.pipe(map((x:any)=>x*5),
    filter((y:any)=> y % 2 ===0)).subscribe((res:any)=>{
      console.log(res);
    });

    
  }





}
