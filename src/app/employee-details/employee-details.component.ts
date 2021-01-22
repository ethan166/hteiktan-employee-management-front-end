import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees: Employee[];
  errorMessage : string;
  id : string;
  chosenEmp: Employee;
  constructor(private empService: EmployeeService, private route: ActivatedRoute) { }

  getEmployees() {
    this.empService.getEmployees().subscribe(
      employees => {
        this.employees = employees; console.log(this.employees);
        this.route.params.subscribe(param => this.id = param['id']);
        this.getEmpDetails(this.id);
      },
      error => this.errorMessage = <any> error
    );
  }
  getEmpDetails(id) {
    for (const iterator of this.employees) {
      if (iterator.empId == id) {
        this.chosenEmp = iterator;
      }
    }
  }

  ngOnInit(): void {
    this.getEmployees();
  }

}
