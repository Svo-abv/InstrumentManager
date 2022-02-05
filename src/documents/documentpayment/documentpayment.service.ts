import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentPayment } from './schemas/documentpayment.entity';

@Injectable()
export class DocumentPaymentService {

    constructor(@InjectRepository(DocumentPayment)
    private documentPaymentRepository: Repository<DocumentPayment>) { }

    async getAll(): Promise<DocumentPayment[]> {
        return this.documentPaymentRepository.find();
    }
}
