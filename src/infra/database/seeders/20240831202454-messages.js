'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('messages', [{
      id: '843d44c0-7841-4703-bdf0-b8bb0b4723e5',
      post_id: '9d494af7-89ed-48f4-8e92-e4ddc401957d',
      user_id: '103579ed-d969-4182-9424-5f24da391a1b',
      content: 'Comentário no primeiro post.',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '7e3d9cd7-ee62-476b-b0d5-08ab35c333ae',
      post_id: '718056e1-84b9-4f4c-8bd0-a22cb7e2e411',
      user_id: '94141098-0109-4176-9a4b-7bb73a64bbe3',
      content: 'Comentário no segundo post.',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('messages', null, {});
  },
};