import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css']
})
export class ServiceDataComponent implements OnInit {

  constructor(private tempSer: DataService) {
    console.log("Component constructor");
    this.getDataFromBackend();
   }

  ngOnInit(): void {
  }

  getDataFromBackend(){
    console.log(this.tempSer.getData());

    this.tempSer.getData().subscribe(
      (res)=>{
      console.log(res);
      },
    (err)=>{
      console.log(err);
    }
    )
  }
  

}
