import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompComponent } from './comp/comp.component';
import { EntcComponent } from './entc/entc.component';
import { McaComponent } from './mca/mca.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {path: '', component: CompComponent},
  {path: 'entc', component: EntcComponent},
  {path: 'mca', component: McaComponent}
]

@NgModule({
  declarations: [
    CompComponent,
    EntcComponent,
    McaComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class DeptModule { }
