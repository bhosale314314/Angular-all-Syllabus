import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data1 = "Hello this is text message from service";
  constructor(private http: HttpClient) { 
    console.log("Hello this is constructor of service");
  }

  getData(){
    // console.log("This is my getData method from service");
    return this.http.get('https://jsonplaceholder.typicode.com/users');
    // this.http.get(url);
    // this.http.post(url, data);
    // this.http.delete(url, id);
    // this.http.put(url/id, data);
  }
}
