import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  empEditForm: FormGroup;
  total: number;
  errorMessage : string;
  successMessage : string;
  name: string;
  constructor(public matDialog: MatDialog, private router: Router, private empService: EmployeeService) { }
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "600px";
    dialogConfig.width = "800px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(AddEmployeeComponent, dialogConfig);
  }
  onSubmit() {
    console.log(this.name);
    this.searchEmployees();
  }

  private searchEmployees() {
    this.empService.searchEmployees(this.name).subscribe(
      employees=> {
        this.employees = employees
        this.total = employees.length
      },
      error => this.errorMessage = <any> error
    );
  }
  getEmployees() {
    this.empService.getEmployees().subscribe(
      employees => {this.employees = employees
      this.total=employees.length
      },
      error => this.errorMessage = <any> error
    );
  }
  clearSelection() {
    this.getEmployees();
  }
  removeEmployee(emp: Employee) {
    if(confirm("Are you sure you want to delete?")) {
      // this.router.navigate(['/empList'])
      this.empService.removeEmployee(emp).subscribe(
        () => 
         // console.log('deleted response', data);
          this.getEmployees()
        ,
        (error) => this.errorMessage = <any> error
    );

    this.employees = this.employees.filter(e => e.empId != emp.empId);
    this.total -= 1;
    }
 

 
  }
  ngOnInit(): void {
    this.getEmployees();
    this.name ="";
  }

}
