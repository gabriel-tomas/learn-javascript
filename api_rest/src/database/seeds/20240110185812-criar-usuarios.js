const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Heitor',
          email: 'heitor@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Beatriz',
          email: 'bea@gmail.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Paulo',
          email: 'paulo@gmail.com',
          password_hash: await bcryptjs.hash('012345', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
