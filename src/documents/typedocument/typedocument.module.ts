import { Module } from '@nestjs/common';
import { TypeDocumentService } from './typedocument.service';
import { TypeDocumentController } from './typedocument.controller';

@Module({
  providers: [TypeDocumentService],
  controllers: [TypeDocumentController]
})
export class TypeDocumentModule { }
