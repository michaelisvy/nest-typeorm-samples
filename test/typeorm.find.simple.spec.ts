import { Customer } from '../src/entity/customer.entity'
import { CustomerRepository } from '../src/customer.repository';
import { ConnectionManager } from '../src/db/connection.manager';

describe('CustomerRepository', () => {
  const customerRepository: CustomerRepository = new CustomerRepository();


  describe('root', () => {
    it('should save and find customer', async () => {
      const connection = await ConnectionManager.createConnection();
      const customerRepository = connection.getRepository(Customer);
      const customer = new Customer();
      customer.firstName = "John";
      customer.lastName = "Black";
      await customerRepository.save(customer);
      expect(customer.id).toBeGreaterThan(0);

      const customers = await customerRepository.findByIds([customer.id]);
      expect(customers[0].firstName).toBe("John");
      await connection.close();
    });
  });
});
