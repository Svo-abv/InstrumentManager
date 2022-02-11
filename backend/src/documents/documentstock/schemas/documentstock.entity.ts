import { Clients } from "src/dictionaries/clients/schemas/clients.entity";
import { Objects } from "src/dictionaries/objects/schemas/objects.entity";
import { Organizations } from "src/dictionaries/organizations/schemas/organizations.entity";
import { Persons } from "src/dictionaries/persons/schemas/persons.entity";
import { Users } from "src/dictionaries/users/schemas/users.entity";
import { Warehouses } from "src/dictionaries/warehouses/schemas/warehouses.entity";
import { DocumentStatus } from "src/documents/documentstatus/schemas/documentstatus.entity";
import { DocumentTypes } from "src/documents/documenttypes/schemas/documenttypes.entity";
import { Column, DatabaseType, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DocumentStockRows } from "../documentstockrows/schemas/documentstockrows.entity";

@Entity()
export class DocumentStock {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: null })
    statusId: number;

    @Column()
    num: string;

    @Column({ type: 'timestamp' })
    date: Date;

    @Column({ default: null })
    typeId: number;

    @Column({ default: null })
    warehouseId: number;

    @Column({ default: null })
    organizationId: number;

    @Column({ default: null })
    clientId: number;

    @Column({ default: null })
    objectId: number;

    @Column({ default: null })
    userId: number;

    @Column({ default: null })
    personId: number;

    @Column()
    summ: number;

    @Column()
    comment: String;

    @ManyToOne(type => DocumentStatus, status => status.id)
    status: DocumentStatus;

    @ManyToOne(type => DocumentTypes, type => type.id)
    type: DocumentTypes;

    @ManyToOne(type => Warehouses, warehouse => warehouse.id)
    warehouse: Warehouses;

    @ManyToOne(type => Organizations, organization => organization.id)
    organization: Organizations;

    @ManyToOne(type => Clients, client => client.id)
    client: Clients;

    @ManyToOne(type => Objects, object => object.id)
    object: Objects;

    @ManyToOne(type => Users, user => user.id)
    user: Users;

    @ManyToOne(type => Persons, person => person.id)
    person: Persons;

    @OneToMany(type => DocumentStockRows, rows => rows.documentId)
    doc: DocumentStockRows[];

} 