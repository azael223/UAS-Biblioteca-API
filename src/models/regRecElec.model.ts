import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "reg_rec_elec" })
export class RegRecElecModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  area: string;

  @Column()
  turno: string;

  @Column()
  creadoEn: string;
}
