import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUnitDto } from './dto/units.dto';
import { Units } from './schemas/units.entity';

@Injectable()
export class UnitsService {
    constructor(
        @InjectRepository(Units)
        private unitsRepository: Repository<Units>,) { }

    async getAll(): Promise<Units[]> {
        return await this.unitsRepository.find();
    }

    async getById(id: string): Promise<Units> {

        return await this.unitsRepository.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {

        return await this.unitsRepository.delete(id);
    }

    async create(dto: CreateUnitDto): Promise<Units> {

        return await this.unitsRepository.save(dto);
    }

    async update(dto: CreateUnitDto): Promise<Units> {

        return await this.unitsRepository.save(dto);
    }
}
