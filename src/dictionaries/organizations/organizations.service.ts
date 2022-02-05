import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organizations } from './schemas/organizations.entity';

@Injectable()
export class OrganizationsService {
    constructor(@InjectRepository(Organizations)
    private organizationRepository: Repository<Organizations>) { }

    async getAll(): Promise<Organizations[]> {
        return this.organizationRepository.find();
    }
}
