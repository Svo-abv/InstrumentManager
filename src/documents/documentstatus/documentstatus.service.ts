import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentStatus } from './schemas/documentstatus.entity';

@Injectable()
export class DocumentStatusService {

    constructor(@InjectRepository(DocumentStatus)
    private documentStatusRepository: Repository<DocumentStatus>) { }

    async getAll(): Promise<DocumentStatus[]> {
        return this.documentStatusRepository.find();
    }
}
