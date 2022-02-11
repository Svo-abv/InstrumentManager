import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';
import { Persons } from './schemas/persons.entity';

@Module({
  providers: [PersonsService],
  controllers: [PersonsController],
  imports: [TypeOrmModule.forFeature([Persons])]
})
export class PersonsModule {
}
