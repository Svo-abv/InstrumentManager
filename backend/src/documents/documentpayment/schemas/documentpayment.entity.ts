import { Clients } from "src/dictionaries/clients/schemas/clients.entity";
import { Organizations } from "src/dictionaries/organizations/schemas/organizations.entity";
import { Users } from "src/dictionaries/users/schemas/users.entity";
import { Warehouses } from "src/dictionaries/warehouses/schemas/warehouses.entity";
import { DocumentStatus } from "src/documents/documentstatus/schemas/documentstatus.entity";
import { DocumentTypes } from "src/documents/documenttypes/schemas/documenttypes.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DocumentPaymentRows } from "../documentpaymentrows/schemas/documentpaymentrows.entity";

@Entity()
export class DocumentPayment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    statusId: number;

    @Column()
    num: string;

    @Column({ type: 'datetime' })
    date: string;

    @Column()
    typeId: number;

    @Column()
    organizationId: number;

    @Column()
    clientId: number;


    @Column()
    userId: number;

    @Column()
    summ: number;

    @Column()
    comment: String;

    @ManyToOne(type => DocumentStatus, status => status.id)
    status: DocumentStatus;

    @ManyToOne(type => DocumentTypes, type => type.id)
    type: DocumentTypes;

    @ManyToOne(type => Organizations, organization => organization.id)
    organization: Organizations;

    @ManyToOne(type => Clients, client => client.id)
    client: Clients;

    @ManyToOne(type => Users, user => user.id)
    user: Users;

    @OneToMany(type => DocumentPaymentRows, rows => rows.document)
    docs: DocumentPaymentRows[];

}