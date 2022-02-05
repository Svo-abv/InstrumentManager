import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags("Справочник пользователей")
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @ApiOperation({ summary: "Получить список всех зарегистрированных пользователей" })
    @Get()
    getAll() {
        return this.usersService.getAll();
    }
}
