import { Module } from '@nestjs/common';
import { DocumentStockService } from './documentstock.service';
import { DocumentStockController } from './documentstock.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentStock } from './schemas/documentstock.entity';

@Module({
  providers: [DocumentStockService],
  controllers: [DocumentStockController],
  imports: [TypeOrmModule.forFeature([DocumentStock])]
})
export class DocumentStockModule { }
