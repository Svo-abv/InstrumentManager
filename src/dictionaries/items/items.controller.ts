import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ItemsService } from './items.service';

@ApiTags("Справочник номенклатуры")
@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) { }

    @ApiOperation({ summary: "Получить список всей номенклатуры" })
    @Get()
    getAll() {
        return this.itemsService.getAll();
    }
}
