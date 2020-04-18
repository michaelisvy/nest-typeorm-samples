import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import {Account} from './account.entity';

@Entity()
export class Customer  extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(type => Account, account => account.customer, {
    cascade: true,
})
  accounts: Promise<Account[]>;
}