import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CheckAuthGuard } from 'src/systems/guards/checkauth.guards';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/clients.dto';

@ApiTags("Справочник клиентов")
@Controller('clients')
export class ClientsController {

    constructor(private clientsService: ClientsService) { }

    @ApiOperation({ summary: "Получить список всех клиентов" })

    @Get()
    async getAll() {
        return this.clientsService.getAll();
    }

    @Get("/:id")
    getById(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.clientsService.getById(id);
    }

    @Delete("/:id")
    delete(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.clientsService.delete(id);
    }

    @Post("/create")
    create(@Body() dto: CreateClientDto) {
        return this.clientsService.create(dto);
    }

    @Post("/update")
    update(@Body() dto: CreateClientDto) {
        if (!dto.id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.clientsService.update(dto);
    }
}
