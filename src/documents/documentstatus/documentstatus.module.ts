import { Module } from '@nestjs/common';
import { DocumentStatusService } from './documentstatus.service';
import { DocumentStatusController } from './documentstatus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentStatus } from './schemas/documentstatus.entity';

@Module({
  providers: [DocumentStatusService],
  controllers: [DocumentStatusController],
  imports: [TypeOrmModule.forFeature([DocumentStatus])]
})
export class DocumentStatusModule { }
