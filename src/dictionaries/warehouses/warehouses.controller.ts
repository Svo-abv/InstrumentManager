import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { WarehousesService } from './warehouses.service';

@ApiTags("Справочник складов")
@Controller('warehouses')
export class WarehousesController {
    constructor(private warehouseService: WarehousesService) { }

    @ApiOperation({ summary: "Список всех складов" })
    @Get()
    getAll() {
        return this.warehouseService.getAll();
    }
}
