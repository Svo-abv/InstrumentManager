import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectsController } from './objects.controller';
import { ObjectsService } from './objects.service';
import { Objects } from './schemas/objects.entity';

@Module({
  providers: [ObjectsService],
  controllers: [ObjectsController],
  imports: [TypeOrmModule.forFeature([Objects])]
})
export class ObjectsModule {
}
