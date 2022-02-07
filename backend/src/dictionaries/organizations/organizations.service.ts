import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateOrgDto } from './dto/organizations.dto';
import { Organizations } from './schemas/organizations.entity';

@Injectable()
export class OrganizationsService {
    constructor(@InjectRepository(Organizations)
    private organizationRepository: Repository<Organizations>) { }

    async getAll(): Promise<Organizations[]> {
        return await this.organizationRepository.find();
    }

    async getById(id: string): Promise<Organizations> {

        return await this.organizationRepository.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {

        return await this.organizationRepository.delete(id);
    }

    async create(dto: CreateOrgDto): Promise<Organizations> {

        return await this.organizationRepository.save(dto);
    }

    async update(dto: CreateOrgDto): Promise<Organizations> {

        return await this.organizationRepository.save(dto);
    }
}
