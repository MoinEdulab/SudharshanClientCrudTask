import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { application } from 'express';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  
  {path:'create',component:CreateComponent},//given path of creat component
  {path:'create/:id',component:CreateComponent},//its use of update data in single id
  {path:'read',component:ReadComponent}// given path of read component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
