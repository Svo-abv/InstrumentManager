import { DocumentStock } from "src/documents/documentstock/schemas/documentstock.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organizations {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    inn: number;

    @Column()
    ikpp: number;

    @Column()
    address: string;

    @OneToMany(type => DocumentStock, doc => doc.organizationId)
    doc: DocumentStock[];
}