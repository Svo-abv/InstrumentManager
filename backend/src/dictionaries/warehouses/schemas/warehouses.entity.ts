import { DocumentStock } from "src/documents/documentstock/schemas/documentstock.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Warehouses {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    addresse: string;

    @OneToMany(type => DocumentStock, doc => doc.warehouseId)
    doc: DocumentStock[];
}