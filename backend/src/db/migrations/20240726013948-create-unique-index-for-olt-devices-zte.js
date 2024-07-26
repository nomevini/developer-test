'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addIndex('OltDevices', ['slot', 'port', 'ont_id', 'brand'], {
      unique: true,
      name: 'unique_device'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex('OltDevices', 'unique_device');
  }
};
