import { Items } from "src/dictionaries/items/schemas/items.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DocumentStock } from "../../schemas/documentstock.entity";

@Entity()
export class DocumentStockRows {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    itemId: number;

    @Column()
    count: number;

    @Column()
    price: number;

    @Column()
    summ: number;

    @ManyToOne(type => DocumentStock, docs => docs.doc)
    document: DocumentStock;

    @ManyToOne(type => Items, item => item.id)
    type: Items;

}