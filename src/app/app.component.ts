import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hteiktan-employee-management';
  imgUrl: string = 'assets/imgs/logo.jpg';
  showAdd : boolean;
  showList : boolean;
  mainPage : boolean = true;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(['/empList']);
  }
  //toEmpAdd() {
    //this.router.navigate(['/addEmployee'])
   // this.mainPage = false;
  //  this.mainPage = false;
  //  this.showAdd = true;
  //  this.showList = false;

  // }
  // showEmpList() {
  //  this.router.navigate(['/empList'])
  //  this.showList = true;
  //  this.showAdd = false;
  //  this.mainPage = true;
  // }

}
