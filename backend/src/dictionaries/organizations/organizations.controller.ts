import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateOrgDto } from './dto/organizations.dto';
import { OrganizationsService } from './organizations.service';

@ApiTags("Справочник организаций")
@Controller('organizations')
export class OrganizationsController {
    constructor(private organizationService: OrganizationsService) { }

    @ApiOperation({ summary: "Получить список всех организаций" })
    @Get()
    async getAll() {
        return this.organizationService.getAll()
    }

    @Get("/:id")
    getById(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.organizationService.getById(id);
    }

    @Delete("/:id")
    delete(@Param() id: string) {
        if (!id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.organizationService.delete(id);
    }

    @Post("/create")
    create(@Body() dto: CreateOrgDto) {
        return this.organizationService.create(dto);
    }

    @Post("/update")
    update(@Body() dto: CreateOrgDto) {
        if (!dto.id)
            throw new HttpException("Не задан id", HttpStatus.BAD_REQUEST);
        return this.organizationService.update(dto);
    }

}
