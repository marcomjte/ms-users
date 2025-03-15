import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm"
import { Assistance } from "./Assistance"

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'name', type: 'varchar' })
  name!: string

  @Column({ name: 'surname', type: 'varchar' })
  surname!: string

  @Column({ name: 'email', type: 'varchar' })
  email!: string

  @Column({ name: 'language', type: 'varchar' })
  language!: string

  @Column( {name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'} )
  createdAt!: Date

  @OneToMany(() => Assistance, (assistance) => assistance.user)
  @JoinColumn({
    name: 'user_id'
  })
  assistances!: Assistance[]
}