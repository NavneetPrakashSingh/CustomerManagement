import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { of } from 'rxjs/internal/observable/of';

//create a mock object and add an instace to the object to do the http testing

describe('CustomerService', () => {
  let customerService: CustomerService,
  mockHttp;
  let customerObj : Customer;
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp',['delete','get','put', 'post'])
    customerService = new CustomerService(mockHttp);
    customerObj = new Customer();
    customerObj.id=1;
    customerObj.emailAddress="test@test.com";
    customerObj.firstName="TestFirstName";
    customerObj.lastName="TestLastName";
    customerObj.address="TestAddress";
    customerObj.company="TestCompany";
    customerObj.signupDate=new Date();

  });

  describe('createInstance', ()=>{
    it('should create an instance', () => {
      expect(new Customer()).toBeTruthy();
    });
  });

  describe('addVoter', () => {  
    it('should add the customer',()=>{
      mockHttp.post.and.returnValue(of(false));
      customerService.createCustomer(customerObj);
      expect(mockHttp.delete).toBeNaN;
    });
  });
  
  describe('deleteVoter', () => {  
    it('should delete the customer',()=>{
      mockHttp.delete.and.returnValue(of(false));
      customerService.deleteCustomer("1");
      expect(mockHttp.delete).toBeNaN;
    });
  });

  describe('getCustomr', () => {  
    it('should delete the customer',()=>{
      mockHttp.delete.and.returnValue(of(false));
      customerService.deleteCustomer("1");
      expect(mockHttp.delete).toBeNaN;
    });
  });
});



  

