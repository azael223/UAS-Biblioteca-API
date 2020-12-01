import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "usuarios_auth" })
export class UsuarioModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  actualizadoEn: string;

  @Column()
  creadoEn: string;

  @Column()
  status: string;
}
