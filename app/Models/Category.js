/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  subcategories() {
    return this.hasMany('App/Models/Subcategory')
  }
}

module.exports = Category
