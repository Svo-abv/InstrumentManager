import { DocumentStock } from "src/documents/documentstock/schemas/documentstock.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    role: string;

    @OneToMany(type => DocumentStock, doc => doc.userId)
    doc: DocumentStock[];
}