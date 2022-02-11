import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreatePersonsDto } from './dto/persons.dto';
import { Persons } from './schemas/persons.entity';


@Injectable()
export class PersonsService {
    constructor(
        @InjectRepository(Persons)
        private personsRepository: Repository<Persons>,) { }

    async getAll(): Promise<Persons[]> {

        return await this.personsRepository.find();
    }

    async getById(id: string): Promise<Persons> {

        return await this.personsRepository.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {

        return await this.personsRepository.delete(id);
    }

    async create(dto: CreatePersonsDto): Promise<Persons> {

        return await this.personsRepository.save(dto);
    }

    async update(dto: CreatePersonsDto): Promise<Persons> {

        return await this.personsRepository.save(dto);
    }
}
