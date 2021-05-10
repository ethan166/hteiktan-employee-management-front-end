import { Address } from "./Address";

export class Employee {
    empId: number;
    firstname: String;
    lastname: String;
    department: String;
    age: number;
    gender: String;
    startDate: Date;
    endDate: Date;
    salary: number;
    address: Address;
    successMessage: String;
    errorMessage: String;
}