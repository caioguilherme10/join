import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Funcionarios extends BaseSchema {
  protected tableName = 'funcionarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('cpf').primary()
      table.string('nome').notNullable()
      table.string('email').unique().notNullable()
      table.string('avatar').notNullable()
      table.string('biografia')
      table.enu('tipo', ['administrador', 'vendedor']).notNullable()
      table.string('password').notNullable()
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
