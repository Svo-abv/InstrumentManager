import { DocumentPayment } from "src/documents/documentpayment/schemas/documentpayment.entity";
import { DocumentStock } from "src/documents/documentstock/schemas/documentstock.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DocumentStatus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => DocumentStock, docStatus => docStatus.statusId)
    docStatus: DocumentStock[];

    @OneToMany(type => DocumentPayment, docPay => docPay.statusId)
    docPay: DocumentPayment[];
}