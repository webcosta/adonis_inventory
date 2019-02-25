/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Base = require('./Base')

class Material extends Base {
  subcategories() {
    return this.belongsTo('App/Models/Subcategories')
  }

  receivings() {
    return this.hasMany('App/Models/Receiving')
  }
}

module.exports = Material
