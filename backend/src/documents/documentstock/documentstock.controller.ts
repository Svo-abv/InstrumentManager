import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DocumentStockService } from './documentstock.service';
import { CreateDocStockDto } from './dto/documentstock.dto';

@ApiTags("Документ движения")
@Controller('documentstock')
export class DocumentStockController {
    constructor(private documentStockService: DocumentStockService) { }

    @ApiOperation({ summary: "Список документов движения" })
    @Get()
    async getAll() {
        return this.documentStockService.getAll();
    }

    @Get("/:id")
    getById(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.documentStockService.getById(id);
    }

    @Delete("/:id")
    delete(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.documentStockService.delete(id);
    }

    @Post("/create")
    create(@Body() dto: CreateDocStockDto) {
        return this.documentStockService.create(dto);
    }

    @Post("/update")
    update(@Body() dto: CreateDocStockDto) {
        if (!dto.id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.documentStockService.update(dto);
    }
}
