import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from '../employee/Address';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private router: Router,  private addEmpService: EmployeeService , private fb: FormBuilder) { }
  empAddForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  ngOnInit(): void {

    this.empAddForm = this.fb.group({
      empName: ['', Validators.required],
      age:['', Validators.required],
      gender:['', Validators.required],
      startDate:['', Validators.required],
      endDate:['', Validators.required],
      department:['', Validators.required],
      address:this.fb.group({
        streetName:['', Validators.required],
        city:['', Validators.required],
        pincode:['', Validators.required]
      })
    });
  }

  addEmp() {
    let newEmp: Employee = this.empAddForm.value as Employee;

    this.addEmpService.addEmployee(newEmp).subscribe((response) => {
      console.log(response)
      console.log(response.successMessage)
      this.successMessage = response.successMessage },
      error => this.errorMessage = <any> error
    );
  
      if(confirm("Employee Added Successfully!")) {
        this.router.navigate(['/empList'])
      }
  }
  

}
  // goToMain() {
  //   this.router.navigate(['/']);
  // }


