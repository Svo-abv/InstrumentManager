import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthUserDto, RegUserDto } from './dto/users.dto';
import { Users } from './schemas/users.entity';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/systems/auth/auth.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        private authService: AuthService) { }

    async getAll(): Promise<Users[]> {
        return await this.usersRepository.find();
    }

    async login(dto: RegUserDto) {

        const result = await this.usersRepository.findOne({ where: { name: dto.name } });
        if (!result) {
            throw new HttpException("Пользователь ненайден!", HttpStatus.BAD_REQUEST);
        }
        const hsh = await bcrypt.compare(result.password, dto.password);
        if (hsh)
            throw new HttpException("Пароль не верен!", HttpStatus.BAD_REQUEST);

        return this.authService.sign({ id: result.id, name: result.name, role: result.role });

        // } catch (e) {
        //     console.log(e);
        //     throw new HttpException("Ошибка при регистрации", HttpStatus.BAD_REQUEST);


    }

    async reg(dto: RegUserDto) {

        try {
            const hsh = await bcrypt.hash(dto.password, 5);
            const newUser = this.usersRepository.create({ ...dto, password: hsh });
            const result = await this.usersRepository.save(newUser);
            return this.authService.sign({ id: newUser.id, name: newUser.name, role: newUser.role });

        } catch (e) {
            throw new HttpException("Ошибка при регистрации", HttpStatus.BAD_REQUEST);
        }


    }
    async auth(jwt: string) {

        if (!jwt)
            throw new HttpException("Ошибка авторизации", HttpStatus.FORBIDDEN);

        const currKey = jwt.split(' ');

        if (!currKey[0] || currKey[0] !== "Bearer")
            throw new HttpException("Ошибка авторизации", HttpStatus.FORBIDDEN);

        const currUser = <Users>this.authService.decode(currKey[1]);
        if (!currUser)
            throw new HttpException("Ошибка авторизации", HttpStatus.FORBIDDEN);

        return this.authService.sign({ id: currUser.id, name: currUser.name, role: currUser.role });
    }

}
