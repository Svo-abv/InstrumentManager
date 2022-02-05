import { DocumentStock } from "src/documents/documentstock/schemas/documentstock.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clients {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    tel: string;

    @OneToMany(type => DocumentStock, doc => doc.clientId)
    doc: DocumentStock[];
}