import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clients } from './schemas/clients.entity';

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Clients)
        private clientsRepository: Repository<Clients>,) { }

    async getAll(): Promise<Clients[]> {
        return await this.clientsRepository.find();
    }
}
