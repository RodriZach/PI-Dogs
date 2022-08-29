const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');


describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    // describe('name', () => {
    //   it('should throw an error if name is null', (done) => {
    //     Dog.create({})
    //       .then(() => done(new Error('It requires a valid name')))
    //       .catch(() => done());
    //   });
    //   it('should work when its a valid name', () => {
    //     Dog.create({ name: 'Pug' });
    //   });
    // });
    describe('name', () => {
      it('should not create the Dog if name is not send', async () => {
        expect.assertions(1);
        try{
          await Dog.create({weight: '12 - 13', height: '20 - 25'});
        } catch (error) {
          expect(error.message).toBeDefined();
        }
      });
    })
  });
});
