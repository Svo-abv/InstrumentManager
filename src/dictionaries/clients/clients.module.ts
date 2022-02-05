import { Get, Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { Clients } from './schemas/clients.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ClientsService],
  controllers: [ClientsController],
  imports: [TypeOrmModule.forFeature([Clients])]
})
export class ClientsModule {
  constructor(private clientsService: ClientsService) { }

  @Get()
  getAll() {
    return this.clientsService.getAll();
  }
}
