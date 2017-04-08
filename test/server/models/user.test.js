const expect = require('chai').expect;
const User = require('../../../server/models').User;
const Role = require('../../../server/models').Role;
const helper = require('../../test-helper');

const userParams = helper.firstUser;
const roleParams = helper.regularRole;

const notNullAttrs = ['firstName', 'lastName', 'email', 'passwordDigest', 'RoleId'];
const uniqueAttrs = ['username', 'email'];

let user;

describe('User model', () => {
  before(() =>
    Role.create(roleParams)
      .then((role) => {
        userParams.RoleId = role.id;
      }));

  beforeEach(() => {
    user = User.build(userParams);
  });

  // clear DB after each test
  after(() => User.sequelize.sync({ force: true }));

  afterEach(() => User.destroy({ where: {} }));

  describe('Create user', () => {
    it('creates a User instance', () =>
      expect(user).to.exist);

    it('has both first and last name', () => {
      expect(user.firstName).to.equal(userParams.firstName);
      expect(user.lastName).to.equal(userParams.lastName);
    });

    it('saves user with valid attributes', () =>
      user.save().then(newUser => {
        expect(newUser.username).to.equal(user.username);
        expect(newUser.firstName).to.equal(user.firstName);
        expect(newUser.lastName).to.equal(user.lastName);
        expect(newUser.email).to.equal(user.email);
        expect(newUser.passwordDigest).to.equal(user.passwordDigest);
        expect(newUser.RoleId).to.equal(user.RoleId);
      })
    );
    it('has a role defined', () =>
      user.save().then(newUser =>
        User.findById(newUser.id, { include: [Role] })
          .then((foundUser) => {
            expect(foundUser.Role.title).to.equal(roleParams.title);
          })));
  });

  describe('Validations', () => {
    describe('NOT NULL attributes', () => {
      notNullAttrs.forEach((attr) => {
        it(`fails without ${attr}`, () => {
          user[attr] = null;

          return user.save()
            .then(newUser => expect(newUser).to.not.exist)
            .catch(err =>
              expect(/notNull/.test(err.message)).to.be.true);
        });
      });
    });

    describe('UNIQUE attributes', () => {
      uniqueAttrs.forEach((attr) => {
        it(`fails for non unique ${attr}`, () =>
          user.save()
            .then((newUser) => {
              userParams.RoleId = newUser.RoleId;
              return User.build(userParams).save();
            })
            .then(newUser2 => expect(newUser2).to.not.exist)
            .catch(err =>
              expect(/UniqueConstraintError/.test(err.name)).to.be.true));
      });
    });

    it('fails for invalid email', () => {
      user.email = 'invalid email';
      return user.save()
        .then(newUser => expect(newUser).to.not.exist)
        .catch(err =>
          expect(/isEmail failed/.test(err.message)).to.be.true);
    });
  });
});