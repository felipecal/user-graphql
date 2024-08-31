'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('topic', [{
      name: 'Clean Code',
      theme: 'Programmin Language',
      totalCount: 11,
      description: "Test ",
    },
    {
      name: 'Dirty Code',
      theme: 'Programmin Language',
      totalCount: 15,
      description: "Test Dirty",
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('topic', [{
      name: 'Clean Code',
      theme: 'Programmin Language',
      totalCount: 11,
      description: "Test ",
    },
    {
      name: 'Dirty Code',
      theme: 'Programmin Language',
      totalCount: 15,
      description: "Test Dirty",
    }], {});
  }
};
