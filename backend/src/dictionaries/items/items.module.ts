import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './schemas/items.entity';

@Module({
  providers: [ItemsService],
  controllers: [ItemsController],
  imports: [TypeOrmModule.forFeature([Items])]
})
export class ItemsModule { }
