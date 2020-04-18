import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entity/customer.entity';
import { CustomerRepository } from './customer.repository';

@Injectable()
export class CustomerService {

  constructor(
    private customerRepository: CustomerRepository,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  save(customer: Customer): void {
    this.customerRepository.save(customer);
  }
}
