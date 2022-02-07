import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateItemsDto } from './dto/items.dto';
import { ItemsService } from './items.service';

@ApiTags("Справочник номенклатуры")
@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) { }

    @ApiOperation({ summary: "Получить список всей номенклатуры" })
    @Get()
    async getAll() {
        return this.itemsService.getAll();
    }

    @Get("/:id")
    getById(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.itemsService.getById(id);
    }

    @Delete("/:id")
    delete(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.itemsService.delete(id);
    }

    @Post("/create")
    create(@Body() dto: CreateItemsDto) {
        return this.itemsService.create(dto);
    }

    @Post("/update")
    update(@Body() dto: CreateItemsDto) {
        if (!dto.id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.itemsService.update(dto);
    }

}
