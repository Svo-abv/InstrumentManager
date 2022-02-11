import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateObjectsDto } from './dto/objects.dto';
import { Objects } from './schemas/objects.entity';

@Injectable()
export class ObjectsService {
    constructor(
        @InjectRepository(Objects)
        private objectsRepository: Repository<Objects>,) { }

    async getAll(): Promise<Objects[]> {
        return await this.objectsRepository.find();
    }

    async getById(id: string): Promise<Objects> {

        return await this.objectsRepository.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {

        return await this.objectsRepository.delete(id);
    }

    async create(dto: CreateObjectsDto): Promise<Objects> {

        return await this.objectsRepository.save(dto);
    }

    async update(dto: CreateObjectsDto): Promise<Objects> {

        return await this.objectsRepository.save(dto);
    }
}
