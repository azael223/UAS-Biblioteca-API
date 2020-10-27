import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "equipos_computo" })
export class EquipoComputoModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  creadoEn: string;

  @Column()
  actualizadoEn: string;
}
