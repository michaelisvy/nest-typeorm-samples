import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Customer } from './entity/customer.entity';
import { CustomerRepository } from './customer.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.db',
      entities: [Customer],
      logging: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [CustomerService, CustomerRepository],
})
export class AppModule {}
