import { Clients } from "src/dictionaries/clients/schemas/clients.entity";
import { Items } from "src/dictionaries/items/schemas/items.entity";
import { Organizations } from "src/dictionaries/organizations/schemas/organizations.entity";
import { Users } from "src/dictionaries/users/schemas/users.entity";
import { Warehouses } from "src/dictionaries/warehouses/schemas/warehouses.entity";
import { DocumentStatus } from "src/documents/documentstatus/schemas/documentstatus.entity";
import { DocumentTypes } from "src/documents/documenttypes/schemas/documenttypes.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DocumentStock } from "../../schemas/documentstock.entity";

@Entity()
export class DocumentStockRows {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    documentId: number;

    @Column()
    itemId: number;

    @Column()
    count: number;

    @Column()
    price: number;

    @Column()
    summ: number;

    @ManyToOne(type => DocumentStock, doc => doc.id)
    doc: DocumentStock[];

    @ManyToOne(type => Items, item => item.id)
    type: Items[];

}