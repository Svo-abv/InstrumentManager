import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DocumentStockRowsService } from './documentstockrows.service';
import { CreateDocumentStockRowsDto } from './dto/documentstockrows.dto';

@ApiTags("Строки документа движения")
@Controller('documentstockrows')
export class DocumentStockRowsController {
    constructor(private documentStockRowsService: DocumentStockRowsService) { }

    @Get("/:id")
    async getAllByDocument(@Param() id: number) {
        if (!id)
            throw new HttpException("Не задан id документа", HttpStatus.BAD_REQUEST);
        return this.documentStockRowsService.getAllByDocument(id);
    }

    @Get("/createblunk/:id")
    async createBlunkRow(@Param() id: number) {
        if (!id)
            throw new HttpException("Не задан id документа", HttpStatus.BAD_REQUEST);
        return this.documentStockRowsService.createBlunkRow(id);
    }

    @Delete("/:id")
    async deleteByIdRow(@Param() id: number) {
        if (!id)
            throw new HttpException("Не задан id записи", HttpStatus.BAD_REQUEST);
        return this.documentStockRowsService.deleteByIdRow(id);
    }

    @Post("/update")
    async updateRow(@Body() data: CreateDocumentStockRowsDto) {
        if (!data.id)
            throw new HttpException("Не задан id записи", HttpStatus.BAD_REQUEST);
        return this.documentStockRowsService.updateRow(data);
    }
    @Post("/save")
    async saveAllRow(@Body() data: CreateDocumentStockRowsDto[]) {
        return this.documentStockRowsService.saveAllRows(data);
    }

}
