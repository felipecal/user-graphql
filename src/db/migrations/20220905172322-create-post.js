'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('post', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:  'user', key: 'id'
        }
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: true
      },
      removed_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('post');
  }
};