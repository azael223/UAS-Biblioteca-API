import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "usuario_reg_cubiculos" })
export class RegCubiculosUsuarioModel {
  @PrimaryColumn()
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
