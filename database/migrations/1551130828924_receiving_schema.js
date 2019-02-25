/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReceivingSchema extends Schema {
  up() {
    this.create('receivings', table => {
      table.increments()
      table.integer('material_id').notNullable()
      table
        .foreign('material_id')
        .references('id')
        .on('materials')
        .onDelete('cascade')
      table.decimal('quantity', 12, 2).notNullable()
      table.boolean('same_day').notNullable()
      table.integer('user_id').notNullable()
      table
        .foreign('user_id')
        .references('id')
        .on('users')
        .onDelete('cascade')
      table.integer('transport_id').notNullable()
      table
        .foreign('transport_id')
        .references('id')
        .on('transports')
        .onDelete('cascade')
      table.text('comment').nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('receivings')
  }
}

module.exports = ReceivingSchema
