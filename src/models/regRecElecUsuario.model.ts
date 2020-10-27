import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "usuarios_reg_rec_elec" })
export class RegRecElecUsuario {
  @PrimaryColumn()
  idRegRecElec: number;

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idInstitucion: number;

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