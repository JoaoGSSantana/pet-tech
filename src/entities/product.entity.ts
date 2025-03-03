import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IProduct } from './models/product.interface'

@Entity({
  name: 'products',
})
export class Product implements IProduct {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id?: string | undefined

  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
  })
  name: string

  @Column({
    name: 'description',
    type: 'text',
  })
  description: string

  @Column({
    name: 'image_url',
    type: 'varchar',
    length: 255,
  })
  image_url: string

  @Column({
    name: 'price',
    type: 'double precision',
  })
  price: number
}
