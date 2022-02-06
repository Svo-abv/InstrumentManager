import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentStock } from './schemas/documentstock.entity';

@Injectable()
export class DocumentStockService {
    constructor(@InjectRepository(DocumentStock)
    private documentStockPrepository: Repository<DocumentStock>) { }

    async getAll(): Promise<DocumentStock[]> {
        return await this.documentStockPrepository.find();
    }
}
