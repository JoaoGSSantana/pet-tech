import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ICategory } from './models/category.interface'

@Entity({
  name: 'category',
})
export class Category implements ICategory {
  @PrimaryGeneratedColumn('increment', {
    name: 'id',
  })
  id?: number | undefined

  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
  })
  name: string

  @Column({
    name: 'creation_date',
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date
}
