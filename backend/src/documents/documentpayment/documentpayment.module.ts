import { Module } from '@nestjs/common';
import { DocumentpaymentService } from './documentpayment.service';

@Module({
  providers: [DocumentpaymentService]
})
export class DocumentpaymentModule {}
