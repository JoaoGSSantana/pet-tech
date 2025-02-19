import { IAddress } from '@/entities/models/address.interface'
import { Person } from '@/entities/person.entity'

export interface IAddressRepository {
  findAddressByPersonId(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(IAddress & Person)[]>
  create(address: IAddress): Promise<IAddress | undefined>
}
