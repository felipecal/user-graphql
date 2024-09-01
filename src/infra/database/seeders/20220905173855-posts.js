"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          id: "9d494af7-89ed-48f4-8e92-e4ddc401957d",
          user_id: "103579ed-d969-4182-9424-5f24da391a1b",
          title: "Primeiro Post",
          content: "Conteúdo do primeiro post.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "718056e1-84b9-4f4c-8bd0-a22cb7e2e411",
          user_id: "94141098-0109-4176-9a4b-7bb73a64bbe3",
          title: "Segundo Post",
          content: "Conteúdo do segundo post.",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
