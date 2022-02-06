import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DocumentTypesService } from './documenttypes.service';
import { CreateDocTypesDto } from './dto/documentstypes.dto';

@ApiTags("Справочник типов операций")
@Controller('documenttypes')
export class DocumentTypesController {
    constructor(private documentTypeService: DocumentTypesService) { }

    @ApiOperation({ summary: "Список всех видов операций" })
    @Get()
    async getAll() {
        return this.documentTypeService.getAll();
    }

    @Get("/:id")
    getById(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.documentTypeService.getById(id);
    }

    @Delete("/:id")
    delete(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.documentTypeService.delete(id);
    }

    @Post("/create")
    create(@Body() dto: CreateDocTypesDto) {
        return this.documentTypeService.create(dto);
    }

    @Post("/update")
    update(@Body() dto: CreateDocTypesDto) {
        if (!dto.id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.documentTypeService.update(dto);
    }

}
