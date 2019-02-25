/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Transport extends Model {
  receivings() {
    return this.hasMany('App/Mopdels/Receiving')
  }
}

module.exports = Transport
