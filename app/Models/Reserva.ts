import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Reserva extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.date()
  public dataReserva: DateTime

  @column()
  public valorReserva: number

  @column()
  public cpf: string

  @column()
  public veiculo_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
