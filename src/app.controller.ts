import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('*')
  notAvailable(): string {
    return 'resource not available at the moment, please visit "http://localhost:3000/product/apple" and see the main exposed method';
  }
}
