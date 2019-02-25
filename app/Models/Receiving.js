/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Base = require('./Base')

class Receiving extends Base {
  materials() {
    return this.belongsTo('App/Models/Material')
  }

  transports() {
    return this.belongsTo('App/Models/Transport')
  }

  users() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Receiving
