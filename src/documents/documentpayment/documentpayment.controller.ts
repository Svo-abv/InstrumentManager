import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DocumentPaymentService } from './documentPayment.service';
import { CreateDocPaymentDto } from './dto/documentspyment.dto';

@ApiTags("Платежный  документ")
@Controller('documentpayment')
export class DocumentpaymentController {
    constructor(private documentPaymentService: DocumentPaymentService) { }

    @ApiOperation({ summary: "Список всех платежных документов" })
    @Get()
    async getAll() {
        return this.documentPaymentService.getAll();
    }

    @Get("/:id")
    getById(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.documentPaymentService.getById(id);
    }

    @Delete("/:id")
    delete(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.documentPaymentService.delete(id);
    }

    @Post("/create")
    create(@Body() dto: CreateDocPaymentDto) {
        return this.documentPaymentService.create(dto);
    }

    @Post("/update")
    update(@Body() dto: CreateDocPaymentDto) {
        if (!dto.id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.documentPaymentService.update(dto);
    }

}
