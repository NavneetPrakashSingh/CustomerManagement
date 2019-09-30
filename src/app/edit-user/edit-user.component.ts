import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Router} from '@angular/router';
import { Customer } from '../services/customer';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  currentId=""
  firstName=""
  lastName=""
  company=""
  emailId=""
  address =""
  constructor(private route: ActivatedRoute,private customerService: CustomerService,private router: Router) { }

  ngOnInit() {
    this.currentId = this.route.snapshot.paramMap.get("id")

    console.log(this.customerService.getCustomerById(this.currentId).subscribe(data => {
      this.address = data['address']
      this.firstName = data['firstName']
      this.lastName = data['lastName']
      this.company = data['company']
      this.emailId = data['emailAddress']
   }, 
   error => { throw error } ));

  }

  updateUser():void{
      let customerObj = new Customer()
      customerObj.firstName = this.firstName
      customerObj.lastName = this.lastName
      customerObj.emailAddress = this.emailId
      customerObj.address = this.address
      customerObj.company = this.company
      customerObj.signupDate = new Date()

      console.log(this.customerService.updateCustomer(customerObj,this.currentId).subscribe(data => {
        alert("Record updated successfully")
        this.router.navigate(['/view/',this.currentId])
    }, 
    error => { throw error },
    () => console.log("finished")))
  }
}
