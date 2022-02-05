import { Controller, Get } from '@nestjs/common';

@Controller('units')
export class UnitsController {
    @Get()
    getAllUsers() {

        return "все пользователи";
    }
}
