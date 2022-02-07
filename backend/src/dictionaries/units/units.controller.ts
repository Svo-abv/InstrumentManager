import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUnitDto } from './dto/units.dto';
import { UnitsService } from './units.service';

@ApiTags("Справочник едениц измерения")
@Controller('units')
export class UnitsController {

    constructor(private unitsService: UnitsService) { }

    @ApiOperation({ summary: "Получить список единиц измерения" })
    @Get()
    async getAllUsers() {

        return this.unitsService.getAll();
    }

    @Get("/:id")
    getById(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.unitsService.getById(id);
    }

    @Delete("/:id")
    delete(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.unitsService.delete(id);
    }

    @Post("/create")
    create(@Body() dto: CreateUnitDto) {
        return this.unitsService.create(dto);
    }

    @Post("/update")
    update(@Body() dto: CreateUnitDto) {
        if (!dto.id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.unitsService.update(dto);
    }
}
