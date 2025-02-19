import { Address } from '@/entities/address.entity'
import { IAddressRepository } from '@/repositories/address.repository.interface'

export class CreateAddressUseCase {
  constructor(private readonly addressRepository: IAddressRepository) {}

  async handle(address: Address): Promise<Address | undefined> {
    return this.addressRepository.create(address)
  }
}
