import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent},
  {path: 'stud', component: StudentComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'aboutus', component: AboutusComponent},
  // {path: '**', component: ErrorComponent}
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
