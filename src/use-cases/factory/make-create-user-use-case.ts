import { UserRepository } from '@/repositories/pg/user.repository'

import { CreateUserUseCase } from '../create-user'

export function makeCreateUserUseCase(): CreateUserUseCase {
  const userRepository = new UserRepository()

  const createUserUseCase = new CreateUserUseCase(userRepository)

  return createUserUseCase
}
