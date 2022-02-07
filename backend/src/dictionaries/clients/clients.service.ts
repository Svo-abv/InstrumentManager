import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateClientDto } from './dto/clients.dto';
import { Clients } from './schemas/clients.entity';

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Clients)
        private clientsRepository: Repository<Clients>,) { }

    async getAll(): Promise<Clients[]> {
        return await this.clientsRepository.find();
    }

    async getById(id: string): Promise<Clients> {

        return await this.clientsRepository.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {

        return await this.clientsRepository.delete(id);
    }

    async create(dto: CreateClientDto): Promise<Clients> {

        return await this.clientsRepository.save(dto);
    }

    async update(dto: CreateClientDto): Promise<Clients> {

        return await this.clientsRepository.save(dto);
    }
}
