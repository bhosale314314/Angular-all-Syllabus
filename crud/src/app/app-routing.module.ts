import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { CrudComponent } from './crud/crud.component';
import { FirstComponent } from './datacommunication/first/first.component';
import { ParentComponent } from './datacommunication/parent/parent.component';
import { SecondComponent } from './datacommunication/second/second.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent, resolve:[AuthGuard]},
  {path: 'stud/:id/:name', component: StudentComponent},
  // {path: 'staff', component: StaffComponent, canActivate: [AuthGuard]},
  // {path: 'aboutus', component: AboutusComponent},
  {path: 'parent', component : ParentComponent},
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'crud', component: CrudComponent},
  // {path: '**', component: ErrorComponent}
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
