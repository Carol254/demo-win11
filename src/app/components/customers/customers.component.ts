import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customer} from '../customerModel';
import { CustomerResponse } from '../customerResponseModel';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customersService:CustomersService){}

  ngOnInit(): void {
      this.loadCustomers();
  }

 loadCustomers(){
   this.customersService.getCustomers().subscribe({
    next: (response:any) => { // Explicitly type response
      this.customers = response.users;
      console.log('Customers:', this.customers);
    },
    error:(err)=>{
      console.error('Error loading customers' , err)
    }
   });
 }

}
