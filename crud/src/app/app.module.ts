import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ErrorComponent } from './error/error.component';
import { ParentComponent } from './datacommunication/parent/parent.component';
import { FirstComponent } from './datacommunication/first/first.component';
import { SecondComponent } from './datacommunication/second/second.component';
import { ChildComponent } from './datacommunication/parent/child/child.component';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './crud/crud.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    StaffComponent,
    AboutusComponent,
    ErrorComponent,
    ParentComponent,
    FirstComponent,
    SecondComponent,
    ChildComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
