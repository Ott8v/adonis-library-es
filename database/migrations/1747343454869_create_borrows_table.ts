import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'borrows'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('users.id').onDelete('SET NULL')
      table.integer('book_id').unsigned().references('books.id').onDelete('SET NULL')
      table.date('borrowed_at').notNullable()
      table.date('returned_at').nullable()
      table.date('due_date').notNullable()
      table.enum('status', ['borrowed', 'returned', 'overdue']).notNullable().defaultTo('borrowed')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
