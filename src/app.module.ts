import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Customer } from './entity/customer.entity';
import { Account } from './entity/account.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.db',
      entities: [Customer, Account],
      logging: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [CustomerService],
})
export class AppModule {}
