'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('topic', [{
      name: 'Clean Code',
      theme: 'Programmin Language',
      totalCount: 11,
      description: "Testando ",
      // topic_id: 1
    },
    {
      name: 'Dirty Code',
      theme: 'Programmin Language',
      totalCount: 15,
      description: "Testando Dirty",
      // topic_id: 2
    }], {});
  },

  async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('topic', null, {});
  }
};
