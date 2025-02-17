import { PersonRepository } from '@/repositories/pg/person.repository'

import { CreatePersonUseCase } from '../create-person'

export function makeCreatePersonUseCase(): CreatePersonUseCase {
  const personRepository = new PersonRepository()

  const createPersonUseCase = new CreatePersonUseCase(personRepository)

  return createPersonUseCase
}
