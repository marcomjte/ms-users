import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity({ name: 'assistance' })
export class Assistance {
  @PrimaryGeneratedColumn()
  id!: number

  @Column( {name: 'date_check'} )
  dateCheck!: string

  @Column( {name: 'timein'} )
  timein!: string

  @Column( {name: 'timeout'} )
  timeout!: string

  @Column( {name: 'user_id'} )
  user_id!: number

  @ManyToOne(() => User, (user) => user.assistances)
  @JoinColumn({
    name: 'user_id'
  })
  user!: User
}