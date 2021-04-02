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

  searchEmployees(name: string) : Observable<Employee[]>{
    const url = `${this.empUrl}/findbyname/${name}`;
    return  this.http.get<Employee[]>(url)
    .pipe(catchError(this.handleError));
    
    // return this.http.get(url)
    //   .toPromise()
    //   .then(response => response.json() as Employee)
    //   .catch(this.handleError);
   }
  //  private handleError(error: any): Promise<any> {
  //   console.error('Error', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

  removeEmployee(emp :Employee) {
    return this.http.delete(this.empUrl + "/" +emp.empId);
    // return this.http.delete(this.empUrl + "/" +emp.empId)
    // .pipe(catchError(this.handleError));

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
