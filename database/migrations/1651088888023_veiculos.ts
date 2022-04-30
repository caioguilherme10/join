import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Veiculos extends BaseSchema {
  protected tableName = 'veiculos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('marca').notNullable()
      table.string('modelo').notNullable()
      table.string('ano').notNullable()
      table.integer('km').notNullable()
      table.string('chassi').notNullable()
      table.integer('precoCompra').notNullable()
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
