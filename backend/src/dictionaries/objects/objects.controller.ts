import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateObjectsDto } from './dto/objects.dto';
import { ObjectsService } from './objects.service';


@ApiTags("Справочник объектов")
@Controller('objects')
export class ObjectsController {

    constructor(private objectsService: ObjectsService) { }

    @ApiOperation({ summary: "Получить список объектов" })
    @Get()
    async getAllUsers() {

        return this.objectsService.getAll();
    }

    @Get("/:id")
    getById(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.objectsService.getById(id);
    }

    @Delete("/:id")
    delete(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.objectsService.delete(id);
    }

    @Post("/create")
    create(@Body() dto: CreateObjectsDto) {
        return this.objectsService.create(dto);
    }

    @Post("/update")
    update(@Body() dto: CreateObjectsDto) {
        if (!dto.id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.objectsService.update(dto);
    }
}
