'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      id: '103579ed-d969-4182-9424-5f24da391a1b',
      full_name: 'Felipe Caldas',
      nick_name: 'Felipe',
      password: 'hashed_password1',
      email: 'felipe_example@gmail.com',
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '94141098-0109-4176-9a4b-7bb73a64bbe3',
      full_name: 'John Doe',
      nick_name: 'John',
      password: 'hashed_password2',
      email: 'john_example@gmail.com',
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', {
      email: ['felipe_example@gmail.com', 'john_example@gmail.com']
    }, {});
  },
};