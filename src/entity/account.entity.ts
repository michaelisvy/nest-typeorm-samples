import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Double, ManyToOne } from 'typeorm';
import { Customer } from './customer.entity';

@Entity()
export class Account  extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @ManyToOne(type => Customer)
  customer: Customer;
  

}