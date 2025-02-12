export class Person {
  id?: number
  cpf: string
  name: string
  birthday: Date
  email: string
  user_id?: number

  constructor(cpf: string, name: string, birthday: Date, email: string) {
    this.cpf = cpf
    this.name = name
    this.birthday = birthday
    this.email = email
  }
}
