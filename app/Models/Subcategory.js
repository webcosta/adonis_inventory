/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Subcategory extends Model {
  categories() {
    return this.belongsTo('App/Models/Category')
  }

  materials() {
    return this.hasMany('App/Models/Material')
  }
}

module.exports = Subcategory
