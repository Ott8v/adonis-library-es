import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Borrow extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare bookId: number

  @column.dateTime({ autoCreate: true })
  declare borrowedAt: DateTime

  @column.dateTime()
  declare returnedAt: DateTime | null

  @column()
  declare dueDate: DateTime

  @column()
  declare status: 'borrowed' | 'returned' | 'overdue'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
