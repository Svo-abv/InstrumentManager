import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentTypes } from './schemas/documenttypes.entity';

@Injectable()
export class DocumentTypesService {

    constructor(@InjectRepository(DocumentTypes)
    private documentsTypeRepository: Repository<DocumentTypes>) { }

    async getAll(): Promise<DocumentTypes[]> {
        return await this.documentsTypeRepository.find();
    }
}
