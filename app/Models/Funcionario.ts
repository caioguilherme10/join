import { DateTime } from 'luxon'
import { beforeSave, BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Reserva from 'App/Models/Reserva'
import Venda from 'App/Models/Venda'
import { TiposTypes } from 'Contracts/enums'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  public cpf: string

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public avatar: string

  @column()
  public biografia: string

  @column()
  public tipo: TiposTypes

  @column()
  public password: string

  @hasMany(() => Reserva, {
    foreignKey: 'cpf',
  })
  public reservas: HasMany<typeof Reserva>

  @hasMany(() => Venda, {
    foreignKey: 'cpf',
  })
  public vendas: HasMany<typeof Venda>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(funcionario: Funcionario) {
    if (funcionario.$dirty.password) {
      funcionario.password = await Hash.make(funcionario.password)
    }
  }

}
