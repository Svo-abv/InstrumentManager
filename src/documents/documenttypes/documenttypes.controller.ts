import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DocumentTypesService } from './documenttypes.service';

@ApiTags("Справочник типов операций")
@Controller('documenttypes')
export class DocumentTypesController {
    constructor(private documentTypeService: DocumentTypesService) { }

    @ApiOperation({ summary: "Список всех видов операций" })
    @Get()
    async getAll() {
        return this.documentTypeService.getAll();
    }
}
