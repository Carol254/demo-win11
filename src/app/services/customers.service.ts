import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponse } from '../components/customerResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {


 private apiUrl = 'https://dummyjson.com';

  constructor(private http:HttpClient) { }


  getCustomers():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + '/users')
  }
}
