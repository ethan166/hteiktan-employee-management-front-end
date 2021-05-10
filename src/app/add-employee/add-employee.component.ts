import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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

  constructor(public dialogRef: MatDialogRef<AddEmployeeComponent>, private router: Router,  private addEmpService: EmployeeService , private fb: FormBuilder) { }
  empAddForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  ngOnInit(): void {

    this.empAddForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age:['', Validators.required],
      gender:['', Validators.required],
      startDate:['', Validators.required],
      endDate:['', Validators.required],
      department:['', Validators.required],
      salary:['', Validators.required],
      address:this.fb.group({
        streetName:['', Validators.required],
        city:['', Validators.required],
        pincode:['', Validators.required]
      })
    });
  }

  actionFunction() {
   // alert("You have Added an Employee.");
   // this.closeModal();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
   // this.location.reload();
   window.location.reload();
  }

  addEmp() {
    let newEmp: Employee = this.empAddForm.value as Employee;

    this.addEmpService.addEmployee(newEmp).subscribe((response) => {
      console.log(response)
      console.log(response.successMessage)
      this.successMessage = response.successMessage },
      error => this.errorMessage = <any> error
    );
   alert("You have Added an Employee.");
   this.addEmpService.getEmployees();
   this.closeModal();
      // if(confirm("Employee Added Successfully!")) {
      //   this.router.navigate(['/empList'])
      // }
  }
  

}
  // goToMain() {
  //   this.router.navigate(['/']);
  // }


