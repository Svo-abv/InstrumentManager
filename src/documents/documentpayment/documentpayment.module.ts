import { Module } from '@nestjs/common';
import { DocumentPaymentService } from './documentPayment.service';
import { DocumentpaymentController } from './documentpayment.controller';

@Module({
  providers: [DocumentPaymentService],
  controllers: [DocumentpaymentController]
})
export class DocumentPaymentModule { }
