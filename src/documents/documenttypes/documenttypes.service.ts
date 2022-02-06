import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateDocTypesDto } from './dto/documentstypes.dto';
import { DocumentTypes } from './schemas/documenttypes.entity';

@Injectable()
export class DocumentTypesService {

    constructor(@InjectRepository(DocumentTypes)
    private documentsTypeRepository: Repository<DocumentTypes>) { }

    async getAll(): Promise<DocumentTypes[]> {
        return await this.documentsTypeRepository.find();
    }

    async getById(id: string): Promise<DocumentTypes> {

        return await this.documentsTypeRepository.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {

        return await this.documentsTypeRepository.delete(id);
    }

    async create(dto: CreateDocTypesDto): Promise<DocumentTypes> {

        return await this.documentsTypeRepository.save(dto);
    }

    async update(dto: CreateDocTypesDto): Promise<DocumentTypes> {

        return await this.documentsTypeRepository.save(dto);
    }
}
