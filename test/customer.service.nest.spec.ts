import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from '../src/customer.service';
import { Customer } from '../src/entity/customer.entity'
import {CustomerRepository} from "../src/customer.repository";

describe('AppService', () => {
  let customerService: CustomerService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [CustomerService, CustomerRepository],
    }).compile();

    customerService = app.get<CustomerService>(CustomerService);

    const customer = new Customer();
    customer.firstName = "John";
    customer.lastName = "Black";
    //const customer2 = await customerService.save([customer]);
    console.log(customer);
  });

  it('should find all customers', async () => {
    const customers = await customerService.findAll();

    expect(customers[0].firstName).toBe('John');
  });
});
