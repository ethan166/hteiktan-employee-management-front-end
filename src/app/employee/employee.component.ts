import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  total: number;
  errorMessage : string;
  constructor(private empService: EmployeeService) { }

  getEmployees() {
    this.empService.getEmployees().subscribe(
      employees => {this.employees = employees
      this.total=employees.length
      },
      error => this.errorMessage = <any> error
    );
  }
  ngOnInit(): void {
    this.getEmployees();
  }

}
