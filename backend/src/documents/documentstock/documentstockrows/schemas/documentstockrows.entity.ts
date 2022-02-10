import { Items } from "src/dictionaries/items/schemas/items.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DocumentStock } from "../../schemas/documentstock.entity";

@Entity()
export class DocumentStockRows {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    documentId: number

    @Column({ default: null })
    itemId: number;

    @Column({ default: null })
    count: number;

    @Column({ default: null })
    price: number;

    @Column({ default: null })
    summ: number;

    @ManyToOne(type => DocumentStock, docs => docs.id)
    document: DocumentStock;

    @ManyToOne(type => Items, item => item.id)
    item: Items;

}