import { Column,PrimaryGeneratedColumn } from 'typeorm'

export class RegUsers{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    ur:string

    @Column()
    area:string

    @Column()
    turno:string

    @Column()
    fecha:Date
}