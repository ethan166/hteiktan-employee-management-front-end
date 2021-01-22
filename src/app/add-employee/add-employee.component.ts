import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private router: Router,  private addEmpService: EmployeeService) { }
  //empAddForm: FormGroup;

  ngOnInit(): void {

    // this.empAddForm = this.fb.group({
    //   name: [""],
    //   age:[""],
    //   gender:[""],
    //   startDate:[""],
    //   endDate:[""],
    //   department:[""],
    //   street:[""],
    //   city:[""],
    //   pincode:[""]
    // });
  }

  // addEmp() {
  //   let newEmp: Employee = this.empAddForm.value as Employee;
    
  //   this.addEmpService.addEmployee(newEmp)
  //   .subscribe((response) => {
  //     this.
  //   })
  }
  // goToMain() {
  //   this.router.navigate(['/']);
  // }


