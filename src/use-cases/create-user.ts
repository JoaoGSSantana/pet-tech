import { User } from '@/entities/user.entity'
import { UserRepository } from '@/repositories/user.repository'

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async handle(user: User): Promise<User | undefined> {
    return this.userRepository.create(user)
  }
}
