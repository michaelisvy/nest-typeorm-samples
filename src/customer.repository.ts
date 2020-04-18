import { Customer } from './entity/customer.entity'
import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {}