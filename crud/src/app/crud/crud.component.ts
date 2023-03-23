import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../datacommunication/data-sharing.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
public empData:any;
  constructor(private dataShare: DataSharingService) { }

  ngOnInit(): void {
    this.dataShare.getData().subscribe((res:any)=>{
      console.log(res);
      this.empData= res;
    })
  }

  onEdit(data:any){
    
    console.log(data);
  }


  onDelete(data1:any){
    console.log(data1);
  }

}
