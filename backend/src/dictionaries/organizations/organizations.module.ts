import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizations } from './schemas/organizations.entity';

@Module({
  providers: [OrganizationsService],
  controllers: [OrganizationsController],
  imports: [TypeOrmModule.forFeature([Organizations])]
})
export class OrganizationsModule { }
