import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DocumentPayment } from "../../schemas/documentpayment.entity";

@Entity()
export class DocumentPaymentRows {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    summ: number;

    @ManyToOne(type => DocumentPayment, doc => doc.docs)
    document: DocumentPayment;

}