import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { get } from 'https';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent  {

  
  employees: Employee[];
  constructor(private employeeService: EmployeeService,
              private router : Router) {

  }
  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
     this.employees = data;
    });
  }
  updateEmployee(id: number | undefined) {
    this.router.navigate(['update-employee', id]);
  }
}
      // {
      //   "id":12,
      //   "firstName": "sandeep",
      //   "lastName": "Bhattarai",
      //   "emailId": "sandeepbtr439@gmail.com"
      // },
      // {
      // "id": 2,
      // "firstName": "Harry",
      // "lastName": "Styles",
      // "emailId":"harry@styles.com"
      // }];
  
  

// ngOnInIt() {
  // this.employees = [
  //   {
  //     "id":12,
  //     "firstName": "sandeep",
  //     "lastName": "Bhattarai",
  //     "emailId": "sandeepbtr439@gmail.com"
  //   },
  //   {
  //   "id": 2,
  //   "firstName": "Harry",
  //   "lastName": "Styles",
  //   "emailId":"harry@styles.com"
  //   }];

// }
