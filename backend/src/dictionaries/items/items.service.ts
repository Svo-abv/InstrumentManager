import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateContextOptions } from 'vm';
import { CreateItemsDto } from './dto/items.dto';
import { Items } from './schemas/items.entity';

@Injectable()
export class ItemsService {
    constructor(@InjectRepository(Items)
    private itemsRepository: Repository<Items>) { }

    async getAll(): Promise<Items[]> {
        return await this.itemsRepository.find();
    }

    async getById(id: string): Promise<Items> {

        return await this.itemsRepository.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {

        return await this.itemsRepository.delete(id);
    }

    async create(dto: CreateItemsDto): Promise<Items> {

        return await this.itemsRepository.save(dto);
    }

    async update(dto: CreateItemsDto): Promise<Items> {

        return await this.itemsRepository.save(dto);
    }
}
