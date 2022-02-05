import { Module } from '@nestjs/common';
import { DocumentTypesService } from './documenttypes.service';
import { DocumentTypesController } from './documenttypes.controller';

@Module({
  providers: [DocumentTypesService],
  controllers: [DocumentTypesController]
})
export class DocumentTypesModule { }
