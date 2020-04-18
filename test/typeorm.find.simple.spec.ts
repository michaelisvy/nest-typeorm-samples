import { Customer } from '../src/entity/customer.entity'
import { CustomerRepository } from '../src/customer.repository';
import { ConnectionManager } from '../src/db/connection.manager';

describe('CustomerRepository', () => {
  let customerRepository: CustomerRepository = new CustomerRepository();

  beforeEach(async () => {
  }); 

  describe('root', () => {
    it('should save and find customer', async () => {
      let connection = await ConnectionManager.createConnection();
      let customerRepository = connection.getRepository(Customer);
      let customer = new Customer();
      customer.firstName = "John";
      customer.lastName = "Black";
      await customerRepository.save(customer);
      expect(customer.id).toBeGreaterThan(0);

      let customers = await customerRepository.findByIds([customer.id]);
      expect(customers[0].firstName).toBe("John");
      await connection.close();
    });
  });
});
