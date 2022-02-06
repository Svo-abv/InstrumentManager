import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DocumentStatusService } from './documentstatus.service';

@ApiTags("Справочник статусов документов")
@Controller('documentstatus')
export class DocumentStatusController {
    constructor(private documentStatusService: DocumentStatusService) { }

    @ApiOperation({ summary: "Список всех статусов документов" })
    @Get()
    async getAll() {
        return this.documentStatusService.getAll();
    }
}
