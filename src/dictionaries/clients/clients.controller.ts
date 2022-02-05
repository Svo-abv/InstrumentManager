import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClientsService } from './clients.service';

@ApiTags("Справочник клиентов")
@Controller('clients')
export class ClientsController {

    constructor(private clientsService: ClientsService) { }

    @ApiOperation({ summary: "Получить список всех клиентов" })
    @Get()
    async getAll() {
        return this.clientsService.getAll();
    }
}
