'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('post', [{
      title: 'Clean Code',
      description: 'just a simple book about how to improve your code and the style how you write.',
      created_at: new Date(),
      active: true,
      user_id: 1
    },
    {
      title: 'Clean Architeture',
      description: 'A book about how to improve your architecture.',
      created_at: new Date(),
      active: true,
      user_id: 2
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('post', [{
      title: 'Clean Code',
      description: 'just a simple book about how to improve your code and the style how you write.',
      created_at: new Date(),
      active: true,
      user_id: 1
    },
    {
      title: 'Clean Architeture',
      description: 'A book about how to improve your architecture.',
      created_at: new Date(),
      active: true,
      user_id: 2
    }], {});
  }
};
