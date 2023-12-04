'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'offer', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNulll: false,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'offer')
  },
}
