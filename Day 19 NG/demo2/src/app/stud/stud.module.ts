import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudDetailsComponent } from './stud-details/stud-details.component';
import { AdmissionInfoComponent } from './admission-info/admission-info.component';
import { ExamComponent } from './exam/exam.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes =[
  {path:'', component: StudDetailsComponent },
  { path: 'admisn', component: AdmissionInfoComponent},
  {path: 'exam', component: ExamComponent}
]

@NgModule({
  declarations: [
    StudDetailsComponent,
    AdmissionInfoComponent,
    ExamComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class StudModule { }
