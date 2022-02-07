import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateDocStatusDto } from './dto/documentstatus.dto';
import { DocumentStatus } from './schemas/documentstatus.entity';

@Injectable()
export class DocumentStatusService {

    constructor(@InjectRepository(DocumentStatus)
    private documentStatusRepository: Repository<DocumentStatus>) { }

    async getAll(): Promise<DocumentStatus[]> {
        return await this.documentStatusRepository.find();
    }

    async getById(id: string): Promise<DocumentStatus> {

        return await this.documentStatusRepository.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {

        return await this.documentStatusRepository.delete(id);
    }

    async create(dto: CreateDocStatusDto): Promise<DocumentStatus> {

        return await this.documentStatusRepository.save(dto);
    }

    async update(dto: CreateDocStatusDto): Promise<DocumentStatus> {

        return await this.documentStatusRepository.save(dto);
    }
}
