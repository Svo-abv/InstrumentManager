import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Warehouses {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    addresse: string;
}