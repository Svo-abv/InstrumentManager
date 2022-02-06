import { Body, Headers, Controller, Get, Post, UseGuards, SetMetadata } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegUserDto } from './dto/users.dto';
import { UsersService } from './users.service';

@ApiTags("Справочник пользователей")
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @ApiOperation({ summary: "Получить список всех зарегистрированных пользователей" })

    @Get()
    async getAll() {
        return this.usersService.getAll();
    }

    @SetMetadata("isPublic", true)
    @Post("login")
    async login(@Body() regDto: RegUserDto) {
        return this.usersService.login(regDto);
    }

    @SetMetadata("isPublic", true)
    @Post("reg")
    async registration(@Body() regDto: RegUserDto) {
        return this.usersService.reg(regDto);
    }

    @Get("auth")
    async auth(@Headers("authorization") jwt: string) {
        return this.usersService.auth(jwt);
    }

}
