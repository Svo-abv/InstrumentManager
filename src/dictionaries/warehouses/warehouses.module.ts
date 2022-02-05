import { Module } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';

@Module({
  providers: [WarehousesService]
})
export class WarehousesModule {}
