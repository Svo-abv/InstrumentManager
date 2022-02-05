import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UnitsService } from './units.service';

@ApiTags("Справочник едениц измерения")
@Controller('units')
export class UnitsController {

    constructor(private unitsService: UnitsService) { }

    @ApiOperation({ summary: "Получить список единиц измерения" })
    @Get()
    getAllUsers() {

        return this.unitsService.getAll();
    }
}
