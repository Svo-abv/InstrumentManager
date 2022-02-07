import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateWarehousesDto } from './dto/warehouses.dto';
import { Warehouses } from './schemas/warehouses.entity';

@Injectable()
export class WarehousesService {

    constructor(@InjectRepository(Warehouses)
    private warehousesRepository: Repository<Warehouses>) { }

    async getAll(): Promise<Warehouses[]> {
        return await this.warehousesRepository.find();
    }

    async getById(id: string): Promise<Warehouses> {

        return await this.warehousesRepository.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {

        return await this.warehousesRepository.delete(id);
    }

    async create(dto: CreateWarehousesDto): Promise<Warehouses> {

        return await this.warehousesRepository.save(dto);
    }

    async update(dto: CreateWarehousesDto): Promise<Warehouses> {

        return await this.warehousesRepository.save(dto);
    }
}
