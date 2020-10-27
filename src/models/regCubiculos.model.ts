import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "reg_cubiculos" })
export class RegCubiculosModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ur: string;

  @Column()
  biblioteca: string;

  @Column()
  creadoEn: string;
}
