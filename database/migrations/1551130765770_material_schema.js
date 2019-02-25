/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MaterialSchema extends Schema {
  up() {
    this.create('materials', table => {
      table.increments()
      table.string('title', 100).notNullable()
      table.string('unit', 30).notNullable()
      table.integer('subcategory_id').notNullable()
      table
        .foreign('subcategory_id')
        .references('id')
        .on('subcategories')
        .onDelete('cascade')
      table.text('info').nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('materials')
  }
}

module.exports = MaterialSchema
