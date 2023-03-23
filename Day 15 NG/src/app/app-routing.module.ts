import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent, resolve:[AuthGuard]},
  {path: 'stud/:id/:name', component: StudentComponent},
  {path: 'staff', component: StaffComponent, canActivate: [AuthGuard]},
  {path: 'aboutus', component: AboutusComponent},
  // {path: '**', component: ErrorComponent}
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
