import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DocumentPaymentService } from './documentPayment.service';

@ApiTags("Платежный  документ")
@Controller('documentpayment')
export class DocumentpaymentController {
    constructor(private documentPaymentService: DocumentPaymentService) { }

    @ApiOperation({ summary: "Список всех платежных документов" })
    @Get()
    getAll() {
        return this.documentPaymentService.getAll();
    }
}
