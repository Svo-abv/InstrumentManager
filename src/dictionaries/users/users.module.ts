import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './schemas/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/systems/auth/auth.module';

@Module({
  providers: [UsersService, JwtModule],
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([Users]),
    AuthModule,
  ]
})
export class UsersModule {
}
