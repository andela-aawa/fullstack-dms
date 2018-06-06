const faker = require('faker');
const bcrypt = require('bcrypt');

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('awa321', bcrypt.genSaltSync(8)),
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('awa123', bcrypt.genSaltSync(8)),
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('Users', {
      id: [1, 2]
    });
  }
};
