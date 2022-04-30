import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { StatusTypes } from 'Contracts/enums'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.date()
  public dataVenda: DateTime

  @column()
  public status: StatusTypes

  @column()
  public valorVenda: number

  @column()
  public cpf: string

  @column()
  public veiculo_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
