import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
public messageFromFirst:any;
public result:any;
public postOffice:any;
  constructor(private shareService: DataSharingService, private route: Router) {
    this.shareService.getMessage().subscribe((res:any)=>{
      console.log(res);
    })
    this.getDataFromAPi();
   }

  ngOnInit(): void {
  }

  sendDataFromFirst(){
    this.messageFromFirst ="This is message from first";
    this.shareService.setMessage(this.messageFromFirst);
    this.route.navigate(['second']);
  }


  getDataFromAPi(){
    this.shareService.getData().subscribe((res:any)=>{
      console.log(res);
      this.result = res[0];
      console.log(this.result);
      this.postOffice= this.result.PostOffice;
      console.log(this.postOffice);
    })
  }

  sendDataFromFirstTest(){
    // if(this.postOffice ===""){
    //   // navigate to home screen
    // }
    // else{
    //   // navigate to main screen
    // }
  }

}
