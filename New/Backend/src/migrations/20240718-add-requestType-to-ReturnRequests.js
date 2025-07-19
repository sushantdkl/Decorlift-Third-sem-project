'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('ReturnRequests', 'requestType', {
      type: Sequelize.ENUM('refund', 'exchange'),
      allowNull: false,
      defaultValue: 'refund',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('ReturnRequests', 'requestType');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_ReturnRequests_requestType";');
  }
};
