import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService) {
  };

  ngOnInit(): void {

    this.employeeService.getEmployeeById();
  }


}
