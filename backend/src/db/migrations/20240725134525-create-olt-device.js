'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OltDevices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      slot: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      port: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ont_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sn: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OltDevices');
  }
};