import { Units } from "src/dictionaries/units/schemas/units.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
}

