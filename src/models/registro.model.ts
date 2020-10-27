import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "registros" })
export class Registro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ur: string;

  @Column()
  area: string;

  @Column()
  turno: string;

  @Column()
  creadoEn: string;
}
