import { Person } from '@/entities/person.entity'
import { database } from '@/lib/pg/db'

export class PersonRepository {
  public async create({
    name,
    cpf,
    email,
    birth,
    user_id,
  }: Person): Promise<Person | undefined> {
    const result = await database.clientInstance?.query(
      'INSERT INTO person (name, cpf, email, birth, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, cpf, email, birth, user_id],
    )

    return result?.rows[0]
  }
}
