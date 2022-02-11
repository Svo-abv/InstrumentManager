import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePersonsDto } from './dto/persons.dto';
import { PersonsService } from './persons.service';


@ApiTags("Справочник физ. лиц")
@Controller('persons')
export class PersonsController {

    constructor(private personsService: PersonsService) { }

    @ApiOperation({ summary: "Получить список физ. лиц" })
    @Get()
    async getAllUsers() {

        return this.personsService.getAll();
    }

    @Get("/:id")
    getById(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.personsService.getById(id);
    }

    @Delete("/:id")
    delete(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.personsService.delete(id);
    }

    @Post("/create")
    create(@Body() dto: CreatePersonsDto) {
        return this.personsService.create(dto);
    }

    @Post("/update")
    update(@Body() dto: CreatePersonsDto) {
        if (!dto.id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.personsService.update(dto);
    }
}
