import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entity/customer.entity';
import { CustomerRepository } from './customer.repository';
import { ConnectionManager } from './db/connection.manager';

@Injectable()
export class CustomerService {

  constructor(@InjectRepository(CustomerRepository) private customerRepository: CustomerRepository) {}


  getHello(): string {
    return 'Hello World!';
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  async save(customers: Customer[]): Promise<Customer[]> {
    return await this.customerRepository.save(customers);

  }
}
