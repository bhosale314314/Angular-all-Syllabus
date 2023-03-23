import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { ExamModule } from './exam/exam.module';
import { DirectivesComponent } from './directives/directives.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesComponent,
    RegistrationformComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    ExamModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

