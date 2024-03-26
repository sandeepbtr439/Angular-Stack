import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmploymentComponent } from './create-employment/create-employment.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'employees', component: EmployeeListComponent},
  {path:'create-employee', component: CreateEmploymentComponent},
  {path:'update-employee/:id', component: UpdateEmployeeComponent},
  {path: '', redirectTo:'employees', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
