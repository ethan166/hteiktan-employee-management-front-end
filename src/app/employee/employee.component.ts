import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  successMessage : string;
  constructor(private router: Router, private empService: EmployeeService) { }

  getEmployees() {
    this.empService.getEmployees().subscribe(
      employees => {this.employees = employees
      this.total=employees.length
      },
      error => this.errorMessage = <any> error
    );
  }
  removeEmployee(emp: Employee) {
    if(confirm("Are you sure you want to delete?")) {
      // this.router.navigate(['/empList'])
      this.empService.removeEmployee(emp).subscribe(
        () => this.getEmployees(),
        (error) => this.errorMessage = <any> error
    );

    this.employees = this.employees.filter(e => e.empId != emp.empId);
    this.total -= 1;
    }
 

 
  }
  ngOnInit(): void {
    this.getEmployees();
  }

}
