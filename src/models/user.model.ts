import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { RegUsers } from "./reg_users.model";

@Entity({ name: "usuarios" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_reg_usuarios: number;

  @Column()
  nombre: string;

  @Column()
  sexo: string;

  @Column()
  institucion: string;

  @Column()
  usuario_in: string;

  @Column()
  usuario_ex: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  hora: Date;
}
