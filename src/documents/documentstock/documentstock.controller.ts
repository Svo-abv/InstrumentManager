import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DocumentStockService } from './documentstock.service';

@ApiTags("Документ движения")
@Controller('documentstock')
export class DocumentStockController {
    constructor(private documentStockService: DocumentStockService) { }

    @ApiOperation({ summary: "Список документов движения" })
    @Get()
    async getAll() {
        return this.documentStockService.getAll();
    }


}
