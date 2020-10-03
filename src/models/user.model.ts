import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'usuarios'})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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

  @Column({type:"timestamp", default: () => "CURRENT_TIMESTAMP"})
  hora: Date;
}
export const UserKeys = [
  "id",
  "nombre",
  "sexo",
  "institucion",
  "usuario_in",
  "usuario_ex",
  "hora",
];
