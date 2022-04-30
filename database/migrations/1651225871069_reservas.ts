import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Reservas extends BaseSchema {
  protected tableName = 'reservas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.date('dataReserva')
      table.integer('valorReserva')
      table.integer('veiculo_id').unsigned().references('veiculos.id')
      table.string('cpf').unsigned().references('funcionarios.cpf')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
