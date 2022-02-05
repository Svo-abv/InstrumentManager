import { Units } from "src/dictionaries/units/schemas/units.entity";
import { DocumentStockRows } from "src/documents/documentstock/documentstockrows/schemas/documentstockrows.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Items {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    img: string;

    @Column()
    unitId: number;

    @ManyToOne(type => Units, unit => unit.id)
    unit: Units[];


    @OneToMany(type => DocumentStockRows, doc => doc.itemId)
    doc: DocumentStockRows[];
}

