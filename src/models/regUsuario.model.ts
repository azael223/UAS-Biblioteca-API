import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { InstitucionModel } from "./institucion.model";
import { RegistroModel } from "./registro.model";

@Entity({ name: "usuarios_registros" })
export class RegUsuarioModel {
  @Column() 
  idRegistro: number;

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idInstitucion: number;

  @Column()
  nombre: string;

  @Column()
  tipo: string;

  @Column()
  sexo: string;

  @Column()
  creadoEn: string;

  @Column()
  terminadoEn: string;
}
