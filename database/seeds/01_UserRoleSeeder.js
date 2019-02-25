/** @type {import('@adonisjs/lucid/src/Factory')} */
const UserRole = use('App/Models/UserRole')

class RoleSeeder {
  async run() {
    await UserRole.query().delete()

    const roles = [
      { title: 'admin', info: 'Admin of the app. All actions allowed' },
      { title: 'receiving', info: 'Receiving staff. Can manage his entries' },
      { title: 'manager', info: 'Manager rights. Can check reports and manage entries' }
    ]
    await UserRole.createMany(roles)
  }
}

module.exports = RoleSeeder
