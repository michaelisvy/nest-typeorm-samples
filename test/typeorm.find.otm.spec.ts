import { Customer } from '../src/entity/customer.entity'
import { CustomerRepository } from '../src/customer.repository';
import { ConnectionManager } from '../src/db/connection.manager';
import { Account } from '../src/entity/account.entity';

describe('CustomerRepository', () => {
  let customerRepository: CustomerRepository = new CustomerRepository();

  beforeEach(async () => {
  }); 

  describe('root', () => {
    it('should save a customer with accounts', async () => {
      let connection = await ConnectionManager.createConnection();
      let customerRepository = connection.getRepository(Customer);
      let customer = new Customer();
      customer.firstName = "John";
      customer.lastName = "Black";

      let account1 = new Account();
      account1.amount = 100;
      let account2 = new Account();
      account2.amount = 200;
      customer.accounts = Promise.resolve([account1, account2]);
      await customerRepository.save(customer);
      expect(customer.id).toBeGreaterThan(0);
      expect(account1.id).toBeGreaterThan(0);
      
      let retrievedCustomer = await customerRepository.findOne({"id": customer.id});
      expect(retrievedCustomer.firstName).toBe("John");
      let retrievedAccounts = await retrievedCustomer.accounts;
      expect(retrievedAccounts[0].amount).toBe(100);

      retrievedCustomer.firstName = "toto";
      await customerRepository.save(retrievedCustomer);
      await connection.close();
    });
  });
});
