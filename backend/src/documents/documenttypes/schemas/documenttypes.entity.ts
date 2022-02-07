import { DocumentPayment } from "src/documents/documentpayment/schemas/documentpayment.entity";
import { DocumentStock } from "src/documents/documentstock/schemas/documentstock.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DocumentTypes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => DocumentStock, docStatus => docStatus.typeId)
    docStatus: DocumentStock[];

    @OneToMany(type => DocumentPayment, docPay => docPay.typeId)
    docPay: DocumentPayment[];
}