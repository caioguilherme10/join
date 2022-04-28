import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Funcionarios extends BaseSchema {
  protected tableName = 'funcionarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('cpf')
      table.string('nome')
      table.string('email')
      table.string('avatar')
      table.string('biografia')
      table.string('password')
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
