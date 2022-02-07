import { Module } from '@nestjs/common';
import { DocumentTypesService } from './documenttypes.service';
import { DocumentTypesController } from './documenttypes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentTypes } from './schemas/documenttypes.entity';

@Module({
  providers: [DocumentTypesService],
  controllers: [DocumentTypesController],
  imports: [TypeOrmModule.forFeature([DocumentTypes])]
})
export class DocumentTypesModule { }
