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
    // return this.http.get('https://api.postalpincode.in/postoffice/New%20Delhi');
    return this.http.get('http://localhost:3000/api/courses');
  }

  // to update the data
  editData(data:any){
    return this.http.put('http://localhost:3000/api/updateCourses/'+data.id,data);
  }

  deleteData(id:any){
    return this.http.delete('http://localhost:3000/api/deleteCourses/'+id);
  }
}
