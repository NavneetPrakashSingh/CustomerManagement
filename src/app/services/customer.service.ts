import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiURL: string = 'http://localhost:8080/'
  constructor(private httpClient: HttpClient) { }

  public createCustomer(customer: Customer){
    return this.httpClient.post(`${this.apiURL}/customer/save/`,customer);
  }

  public updateCustomer(customer: Customer, id:string){
    return this.httpClient.put(`${this.apiURL}/customer/update/${id}`,customer)
  }

  public deleteCustomer(id:string){
    return this.httpClient.delete(`${this.apiURL}/customer/delete/${id}`)
  }

  public getCustomerById(id:string){
    return this.httpClient.get(`${this.apiURL}/customer/show/${id}`);
  }

  public getCustomers(url?: string){
    return this.httpClient.get(`${this.apiURL}/customer/index`);
  }
}
