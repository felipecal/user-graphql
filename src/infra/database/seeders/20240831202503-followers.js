'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('followers', [{
      id: 'ea620ccd-f25d-4d02-8a3d-c7f1a34890da',
      user_follow: '103579ed-d969-4182-9424-5f24da391a1b',
      user_followed: '94141098-0109-4176-9a4b-7bb73a64bbe3',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 'dced0154-b3af-4c4c-a76e-bb870f42bb8f',
      user_follow: '94141098-0109-4176-9a4b-7bb73a64bbe3',
      user_followed: '103579ed-d969-4182-9424-5f24da391a1b',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('followers', null, {});
  },
};