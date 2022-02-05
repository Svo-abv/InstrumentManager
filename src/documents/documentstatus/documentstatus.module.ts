import { Module } from '@nestjs/common';
import { DocumentStatusService } from './documentstatus.service';
import { DocumentStatusController } from './documentstatus.controller';

@Module({
  providers: [DocumentStatusService],
  controllers: [DocumentStatusController]
})
export class DocumentStatusModule { }
