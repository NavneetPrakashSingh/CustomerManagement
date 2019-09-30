import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  currentId=""
  firstName=""
  lastName=""
  company=""
  emailId=""
  address =""
  constructor(private route: ActivatedRoute,private customerService: CustomerService,private router: Router) {

   }

  ngOnInit() {
    let localDataSource
    this.currentId = this.route.snapshot.paramMap.get("id")
    // this.route.params.subscribe( params => this.currentId=params.id);

    console.log(this.customerService.getCustomerById(this.currentId).subscribe(data => {
      localDataSource = data
      this.address = data['address']
      this.firstName = data['firstName']
      this.lastName = data['lastName']
      this.company = data['company']
      this.emailId = data['emailAddress']
   }, 
   error => { throw error } ));
  }

  deleteRecord():void{
    var result = confirm("Are you sure you want to delete")
    if(result){
      console.log(this.customerService.deleteCustomer(this.currentId).subscribe(data => {        
        alert("Record deleted successfully")
        this.router.navigate([''])
     }, 
     error => { throw error } ));      
    }
  }

  editRecord():void{
    this.router.navigate(['edit/'+this.currentId])
  }

}
