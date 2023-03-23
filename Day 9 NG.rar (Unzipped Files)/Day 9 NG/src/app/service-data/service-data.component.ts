import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css']
})
export class ServiceDataComponent implements OnInit {

  constructor(private tempSer: DataService) {
    console.log("Component constructor");
    this.tempSer.getData();
    console.log(this.tempSer.data1);
   }

  ngOnInit(): void {
  }

}
