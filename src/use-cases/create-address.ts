import { IAddress } from '@/entities/models/address.interface'
import { IAddressRepository } from '@/repositories/address.repository.interface'

export class CreateAddressUseCase {
  constructor(private readonly addressRepository: IAddressRepository) {}

  async handle(address: IAddress): Promise<IAddress | undefined> {
    return this.addressRepository.create(address)
  }
}
