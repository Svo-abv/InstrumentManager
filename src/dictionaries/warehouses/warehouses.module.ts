import { Module } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { WarehousesController } from './warehouses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Warehouses } from './schemas/warehouses.entity';

@Module({
  providers: [WarehousesService],
  controllers: [WarehousesController],
  imports: [TypeOrmModule.forFeature([Warehouses])]
})
export class WarehousesModule { }
