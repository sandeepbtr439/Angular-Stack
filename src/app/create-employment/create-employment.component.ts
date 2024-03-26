import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employment',
  templateUrl: './create-employment.component.html',
  styleUrl: './create-employment.component.css'
})
export class CreateEmploymentComponent {
employee: Employee = new Employee();
constructor(private employeeservice: EmployeeService,
             private router: Router) {

}

ngOnInit(): void {

}
saveEmployee() {
  this.employeeservice.createEmployee(this.employee).subscribe(data=> {
    console.log(data);
    this.goToEmployeeList();
  },
  error =>console.log(error));
  

}
   goToEmployeeList() {
    this.router.navigate(['/employees']);
   }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
     
  }
}
