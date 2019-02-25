/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubcategorySchema extends Schema {
  up() {
    this.create('subcategories', table => {
      table.increments()
      table.string('title', 50).notNullable()
      table.integer('category_id').notNullable()
      table
        .foreign('category_id')
        .references('id')
        .on('categories')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  down() {
    this.drop('subcategories')
  }
}

module.exports = SubcategorySchema
