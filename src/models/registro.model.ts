import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "registros" })
export class RegistroModel {
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

  @Column()
  actualizadoEn: string;
}
