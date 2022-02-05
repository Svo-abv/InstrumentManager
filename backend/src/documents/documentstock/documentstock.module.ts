import { Module } from '@nestjs/common';
import { DocumentstockService } from './documentstock.service';

@Module({
  providers: [DocumentstockService]
})
export class DocumentstockModule {}
