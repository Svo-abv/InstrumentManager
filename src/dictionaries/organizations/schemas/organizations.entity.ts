import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organizations {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    inn: string;

    @Column()
    ikpp: string;

    @Column()
    address: string;
}