'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('likes', [{
      id: 'fbd4b5d7-7c52-4f36-9a2a-1ecd7283aae9',
      post_id: '9d494af7-89ed-48f4-8e92-e4ddc401957d',
      user_id: '94141098-0109-4176-9a4b-7bb73a64bbe3',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '502ec2fe-2496-4030-9f51-8916cb6db31c',
      post_id: '718056e1-84b9-4f4c-8bd0-a22cb7e2e411',
      user_id: '103579ed-d969-4182-9424-5f24da391a1b',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('likes', null, {});
  },
};