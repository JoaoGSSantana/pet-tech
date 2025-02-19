import { IPerson } from '@/entities/models/person.interface'
import { User } from '@/entities/user.entity'
import { IUserRepository } from '@/repositories/user.repository.interface'

import { ResourceNotFoundError } from './errors/resource-not-found'

export class FindWithPersonUseCase {
  constructor(private userRepository: IUserRepository) {}

  async handler(userId: number): Promise<(User & IPerson) | undefined> {
    const user = await this.userRepository.findWithPerson(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return user
  }
}
