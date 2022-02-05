import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Items } from './schemas/items.entity';

@Injectable()
export class ItemsService {
    constructor(@InjectRepository(Items)
    private itemsRepository: Repository<Items>) { }

    async getAll(): Promise<Items[]> {
        return this.itemsRepository.find();
    }
}
