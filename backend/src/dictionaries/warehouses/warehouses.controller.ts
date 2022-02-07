import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateWarehousesDto } from './dto/warehouses.dto';
import { WarehousesService } from './warehouses.service';

@ApiTags("Справочник складов")
@Controller('warehouses')
export class WarehousesController {
    constructor(private warehouseService: WarehousesService) { }

    @ApiOperation({ summary: "Список всех складов" })
    @Get()
    async getAll() {
        return this.warehouseService.getAll();
    }

    @Get("/:id")
    getById(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.warehouseService.getById(id);
    }

    @Delete("/:id")
    delete(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.warehouseService.delete(id);
    }

    @Post("/create")
    create(@Body() dto: CreateWarehousesDto) {
        return this.warehouseService.create(dto);
    }

    @Post("/update")
    update(@Body() dto: CreateWarehousesDto) {
        if (!dto.id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.warehouseService.update(dto);
    }

}
