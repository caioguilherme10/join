import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vendas extends BaseSchema {
  protected tableName = 'vendas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.date('dataReserva')
      table.enu('status', ['vendidos', 'disponiveis'])
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
