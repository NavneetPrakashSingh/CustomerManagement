import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value = "navneet"
  datasource = ""
  constructor( private customerService: CustomerService,private httpClient: HttpClient ) { }

  ngOnInit() {
    let localDataSource
    console.log(this.customerService.getCustomers("sample").subscribe(data => {
      localDataSource = data
   }, 
   error => { throw error },
   () => this.datasource = localDataSource));

  }

}
