import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data1 = "Hello this is text message from service";
  constructor() { 
    console.log("Hello this is constructor of service");
  }

  getData(){
    console.log("This is my getData method from service");
  }
}
