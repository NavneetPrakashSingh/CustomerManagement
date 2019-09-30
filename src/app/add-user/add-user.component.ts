import { Component, OnInit } from '@angular/core';
import { Customer } from '../services/customer';
import { CustomerService } from '../services/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  firstName:string = ''
  lastName:string=''
  emailId:string=''
  address:string=''
  company:string=''

  constructor( private customerService: CustomerService, private router: Router) { }

  ngOnInit() {

  }

  addUser():void{

    let customerObj = new Customer()
    customerObj.firstName = this.firstName
    customerObj.lastName = this.lastName
    customerObj.emailAddress = this.emailId
    customerObj.address = this.address
    customerObj.company = this.company
    customerObj.signupDate = new Date()

    console.log(this.customerService.createCustomer(customerObj).subscribe(data => {
      alert("User added successfully!")
      this.router.navigate(['/'])
   }, 
   error => { throw error },
   () => console.log("finished")))


  }

}
