import { Module } from '@nestjs/common';
import { TypedocumentService } from './typedocument.service';

@Module({
  providers: [TypedocumentService]
})
export class TypedocumentModule {}
