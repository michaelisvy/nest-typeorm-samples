import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entity/customer.entity';
import { CustomerRepository } from './customer.repository';
import { ConnectionManager } from './db/connection.manager';

@Injectable()
export class CustomerService {

  // constructor(
  //   private customerRepository: CustomerRepository,
  // ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async findAll(): Promise<Customer[]> {
    let connection = await ConnectionManager.createConnection();
    let customerRepository = connection.getRepository(Customer);
    return customerRepository.find();
  }
}
