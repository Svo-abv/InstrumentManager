import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsController } from './units.controller';
import { Units } from './schemas/units.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UnitsService],
  controllers: [UnitsController],
  imports: [TypeOrmModule.forFeature([Units])]
})
export class UnitsModule {
}
