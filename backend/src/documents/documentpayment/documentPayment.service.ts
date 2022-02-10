import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateDocPaymentDto } from './dto/documentspyment.dto';
import { DocumentPayment } from './schemas/documentpayment.entity';

@Injectable()
export class DocumentPaymentService {

    constructor(@InjectRepository(DocumentPayment)
    private documentPaymentRepository: Repository<DocumentPayment>) { }

    async getAll(): Promise<DocumentPayment[]> {
        return await this.documentPaymentRepository.find({ relations: ["status", "type", "organization", "client", "user"] });
    }

    async getById(id: string): Promise<DocumentPayment> {

        return await this.documentPaymentRepository.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {

        return await this.documentPaymentRepository.delete(id);
    }

    async create(dto: CreateDocPaymentDto): Promise<DocumentPayment> {

        return await this.documentPaymentRepository.save(dto);
    }

    async update(dto: CreateDocPaymentDto): Promise<DocumentPayment> {

        return await this.documentPaymentRepository.save(dto);
    }
}
