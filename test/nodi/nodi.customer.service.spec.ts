import { noDiCustomerService } from '@src/nodi';

describe('AppService', () => {
  const customerService1 = noDiCustomerService;
  const customerService2= noDiCustomerService;


  it('should call 2 instances', async () => {
    await customerService1.getHello();
    await customerService2.getHello();
  });
});
