import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public studName:any;
  public studId:any;
  constructor(private actRoute: ActivatedRoute) {

    // first option route param
    this.studName= this.actRoute.snapshot.params['name'];
    this.studId = this.actRoute.snapshot.params['id'];
    // console.log(this.actRoute.snapshot.params['name']);

    // second option param map.
    this.actRoute.paramMap.subscribe((res:any)=>{
      console.log(res.params.name);
      this.studName= res.params.name;
      this.studId = this.actRoute.snapshot.params['id'];
    })

   }

  ngOnInit(): void {
  }

}
