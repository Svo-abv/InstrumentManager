import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Units } from './schemas/units.entity';

@Injectable()
export class UnitsService {
    constructor(
        @InjectRepository(Units)
        private unitsRepository: Repository<Units>,) { }
}
