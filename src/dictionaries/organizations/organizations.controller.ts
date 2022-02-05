import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrganizationsService } from './organizations.service';

@ApiTags("Справочник организаций")
@Controller('organizations')
export class OrganizationsController {
    constructor(private organizationService: OrganizationsService) { }

    @ApiOperation({ summary: "Получить список всех организаций" })
    @Get()
    getAll() {
        return this.organizationService.getAll()
    }
}
