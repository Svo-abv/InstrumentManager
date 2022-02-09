import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentStockRowsController } from './documentstockrows.controller';
import { DocumentStockRowsService } from './documentstockrows.service';
import { DocumentStockRows } from './schemas/documentstockrows.entity';

@Module({
  providers: [DocumentStockRowsService],
  controllers: [DocumentStockRowsController],
  imports: [TypeOrmModule.forFeature([DocumentStockRows])]
})
export class DocumentStockRowsModule { }
