'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('user', [{
      first_name: 'Felipe',
      last_name: 'Caldas',
      age: 20,
      email: 'fcalldas@gmail.com',
      active: true,
      created_at: new Date()
    },
  {
    first_name: 'Pedro',
    last_name: 'Oliveira',
    age: 20,
    email: 'pedroliveira@gmail.com',
    active: true,
    created_at: new Date()
  }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
