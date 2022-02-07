import { Module } from '@nestjs/common';
import { DocumentPaymentService } from './documentPayment.service';
import { DocumentpaymentController } from './documentpayment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentPayment } from './schemas/documentpayment.entity';

@Module({
  providers: [DocumentPaymentService],
  controllers: [DocumentpaymentController],
  imports: [TypeOrmModule.forFeature([DocumentPayment])]
})
export class DocumentPaymentModule { }
