import { IPerson } from '@/entities/models/person.interface'
import { User } from '@/entities/user.entity'

export interface IUserRepository {
  findWithPerson: (userId: number) => Promise<(User & IPerson) | undefined>
  create: (user: User) => Promise<User | undefined>
}
