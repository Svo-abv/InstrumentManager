import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DocumentStatusService } from './documentstatus.service';
import { CreateDocStatusDto } from './dto/documentstatus.dto';

@ApiTags("Справочник статусов документов")
@Controller('documentstatus')
export class DocumentStatusController {
    constructor(private documentStatusService: DocumentStatusService) { }

    @ApiOperation({ summary: "Список всех статусов документов" })
    @Get()
    async getAll() {
        return this.documentStatusService.getAll();
    }

    @Get("/:id")
    getById(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.documentStatusService.getById(id);
    }

    @Delete("/:id")
    delete(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.documentStatusService.delete(id);
    }

    @Post("/create")
    create(@Body() dto: CreateDocStatusDto) {
        return this.documentStatusService.create(dto);
    }

    @Post("/update")
    update(@Body() dto: CreateDocStatusDto) {
        if (!dto.id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.documentStatusService.update(dto);
    }

}
