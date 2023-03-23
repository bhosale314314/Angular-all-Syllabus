import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor(private ser: DataService) { }

  ngOnInit(): void {
    const prom = new Promise(function (resolve, reject){
      setTimeout(() => {
        resolve("Promise resolved ");
        reject("Promise Rejected");
      }, 4000);
    });

    prom.
    then((value:any)=>{
      console.log(" Promise executed " +value);
    })
    .catch((value:any)=>{
      console.log("Promise not executed " +value);
    });

    this.getPromiseAPIData();
  }

  getPromiseAPIData(){
    this.ser.getPromData()
    .then((res:any)=>{
      console.log(res);
    })
    .catch((err:any)=>{
      console.log(err);
    })
  }

}
