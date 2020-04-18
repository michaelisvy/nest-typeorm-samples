import { ConnectionOptions, Connection, createConnection } from "typeorm";
import { Customer } from "../entity/customer.entity";
import { Account } from "../entity/account.entity";

export class ConnectionManager   {
  
  static connectionOptions: ConnectionOptions = {
    type: "sqlite",
          database: "test.db",
          entities: [
              Customer, Account
          ],
          synchronize: true,
          logging: true
  };

  static async createConnection()  {
    return createConnection(this.connectionOptions);

  }
  

}