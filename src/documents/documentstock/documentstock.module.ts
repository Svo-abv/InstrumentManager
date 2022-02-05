import { Module } from '@nestjs/common';
import { DocumentstockService } from './documentstock.service';
import { DocumentstockController } from './documentstock.controller';

@Module({
  providers: [DocumentstockService],
  controllers: [DocumentstockController]
})
export class DocumentstockModule {}
