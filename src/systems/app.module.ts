import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from 'src/dictionaries/clients/clients.module';
import { ItemsModule } from 'src/dictionaries/items/items.module';
import { Items } from 'src/dictionaries/items/schemas/items.entity';
import { OrganizationsModule } from 'src/dictionaries/organizations/organizations.module';
import { Units } from 'src/dictionaries/units/schemas/units.entity';
import { UnitsModule } from 'src/dictionaries/units/units.module';
import { Users } from 'src/dictionaries/users/schemas/users.entity';
import { UsersModule } from 'src/dictionaries/users/users.module';
import { WarehousesModule } from 'src/dictionaries/warehouses/warehouses.module';
import { DocumentPaymentModule } from 'src/documents/documentpayment/documentPayment.module';
import { DocumentstockModule } from 'src/documents/documentstock/documentstock.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],

  imports: [
    UsersModule, ClientsModule,
    ItemsModule, OrganizationsModule,
    WarehousesModule, DocumentPaymentModule,
    DocumentstockModule, UnitsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_LOGIN,
      password: process.env.DB_PWD,
      database: process.env.DB_NAME,
      entities: [Users, Units, Items],
      synchronize: true,
    }),

  ],
})
export class AppModule {
}
