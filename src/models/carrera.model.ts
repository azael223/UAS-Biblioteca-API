import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "carreras" })
export class CarreraModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idInstitucion: number;

  @Column()
  nombre: string;

  @Column()
  creadoEn: string;

  @Column()
  actualizadoEn: string;

}
