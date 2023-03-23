import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private message = new BehaviorSubject('This is default message');
  currentData = this.message.asObservable();

  constructor(private http: HttpClient) { }

  setMessage(msg:any){
    this.message.next(msg);
  }

  getMessage(){
    return this.currentData;
  }

  getData(){
    return this.http.get('https://api.postalpincode.in/postoffice/New%20Delhi');
  }
}
