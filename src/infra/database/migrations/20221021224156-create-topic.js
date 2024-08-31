'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('topic', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      theme: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // topic_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: UserModel,
      //     key: 'id'
      //   }
      // },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      totalCount: {
        type: Sequelize.INTEGER,
        allowNull: true
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
    await queryInterface.dropTable('topic');
  }
};