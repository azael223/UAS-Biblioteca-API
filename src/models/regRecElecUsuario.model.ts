import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { InstitucionModel } from "./institucion.model";
import { RegRecElecModel } from "./regRecElec.model";

@Entity({ name: "usuarios_reg_rec_elec" })
export class RegRecElecUsuarioModel {
  @Column()
  idRegRecElec: number;

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idInstitucion: number;

  @Column()
  idCarrera: number;

  @Column()
  idEquipoComputo: number;

  @Column()
  nombre: string;

  @Column()
  sexo: string;

  @Column()
  email: string;

  @Column()
  creadoEn: string;

  @Column()
  terminadoEn: string;
}
