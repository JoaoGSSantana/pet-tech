import { IPerson } from '@/entities/models/person.interface'
import { database } from '@/lib/pg/db'

import { IPersonRepository } from '../person.repository.interface'

export class PersonRepository implements IPersonRepository {
  public async create({
    name,
    cpf,
    email,
    birth,
    user_id,
  }: IPerson): Promise<IPerson | undefined> {
    const result = await database.clientInstance?.query(
      'INSERT INTO person (name, cpf, email, birth, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, cpf, email, birth, user_id],
    )

    return result?.rows[0]
  }
}
