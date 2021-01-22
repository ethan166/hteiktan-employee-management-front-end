import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private empUrl = 'http://localhost:8080/hteiktan/employees';
  constructor(private http: HttpClient) { }


  getEmployees() : Observable<Employee[]>{
   return  this.http.get<Employee[]>(this.empUrl)
      .pipe(catchError(this.handleError));
  }

  addEmployee(empToAdd: Employee): Observable<any> {
    return this.http.post<Employee>(this.empUrl, empToAdd)
    .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    let errMsg: string = '';
    if (err.error instanceof Error) {
      errMsg = err.error.message;
    } else {
      if (err.status == 0) {
        errMsg = "A connection to back end can not be established.";
      } else {
        errMsg = JSON.parse(err.error).message;
      }
    }
    return throwError(errMsg);
  }
}
