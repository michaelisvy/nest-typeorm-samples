import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from '../src/customer.service';
import { Customer } from '../src/entity/customer.entity'
import { CustomerRepository } from '../src/customer.repository';

describe('AppService', () => {
  let customerService: CustomerService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [CustomerService], 
    }).compile();

    customerService = app.get<CustomerService>(CustomerService);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      let customer = new Customer();
      customer.firstName = "John";
      customer.lastName = "Black";
      await customerService.findAll();

      expect(customerService.getHello()).toBe('Hello World!');
    });
  });
});
