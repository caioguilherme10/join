import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Reserva from 'App/Models/Reserva'
import Venda from 'App/Models/Venda'

export default class Veiculo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public marca: string

  @column()
  public modelo: string

  @column()
  public ano: string

  @column()
  public km: number

  @column()
  public chassi: string

  @column()
  public precoCompra: number

  @hasOne(() => Reserva, {
    foreignKey: 'veiculo_id',
  })
  public reserva: HasOne<typeof Reserva>

  @hasOne(() => Venda, {
    foreignKey: 'veiculo_id',
  })
  public venda: HasOne<typeof Venda>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
