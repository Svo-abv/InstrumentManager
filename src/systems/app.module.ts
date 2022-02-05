import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from 'src/dictionaries/clients/clients.module';
import { Clients } from 'src/dictionaries/clients/schemas/clients.entity';
import { ItemsModule } from 'src/dictionaries/items/items.module';
import { Items } from 'src/dictionaries/items/schemas/items.entity';
import { OrganizationsModule } from 'src/dictionaries/organizations/organizations.module';
import { Organizations } from 'src/dictionaries/organizations/schemas/organizations.entity';
import { Units } from 'src/dictionaries/units/schemas/units.entity';
import { UnitsModule } from 'src/dictionaries/units/units.module';
import { Users } from 'src/dictionaries/users/schemas/users.entity';
import { UsersModule } from 'src/dictionaries/users/users.module';
import { Warehouses } from 'src/dictionaries/warehouses/schemas/warehouses.entity';
import { WarehousesModule } from 'src/dictionaries/warehouses/warehouses.module';
import { DocumentPaymentModule } from 'src/documents/documentpayment/documentPayment.module';
import { DocumentPaymentRows } from 'src/documents/documentpayment/documentpaymentrows/schemas/documentpaymentrows.entity';
import { DocumentPayment } from 'src/documents/documentpayment/schemas/documentpayment.entity';
import { DocumentStatus } from 'src/documents/documentstatus/schemas/documentstatus.entity';
import { DocumentstockModule } from 'src/documents/documentstock/documentstock.module';
import { DocumentStockRows } from 'src/documents/documentstock/documentstockrows/schemas/documentstockrows.entity';
import { DocumentStock } from 'src/documents/documentstock/schemas/documentstock.entity';
import { DocumentTypes } from 'src/documents/documenttypes/schemas/documenttypes.entity';
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
      entities: [Users, Units, Items, Warehouses, Clients, Organizations, DocumentTypes, DocumentStatus, DocumentStock,
        DocumentStockRows, DocumentPayment, DocumentPaymentRows],
      synchronize: true,
    }),

  ],
})
export class AppModule {
}
