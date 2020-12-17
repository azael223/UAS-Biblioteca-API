import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "usuarios_reg_cubiculos" })
export class RegCubiculosUsuarioModel {
  @Column()
  idRegistroCubiculo: number;

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idInstitucion: number;

  @Column()
  idCubiculo: number;

  @Column()
  nombre: string;

  @Column()
  creadoEn: string;

  @Column()
  terminadoEn: string;
}
