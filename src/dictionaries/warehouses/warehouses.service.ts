import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Warehouses } from './schemas/warehouses.entity';

@Injectable()
export class WarehousesService {

    constructor(@InjectRepository(Warehouses)
    private warehousesRepository: Repository<Warehouses>) { }

    async getAll(): Promise<Warehouses[]> {
        return await this.warehousesRepository.find();
    }
}
