/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
  weight: '2 - 5',
  height: '15 - 20'
};

describe('Dogs routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
    it('should get 404', () => 
      agent.get('/dogss').expect(404))
  });
  describe('GET /dogs/:id', () => {
    it('should get 200', () => 
      agent.get('/dogs/12').expect(200))
  });
  describe('GET /dogs?name=', () => {
    it('should get 200', () => 
      agent.get('/dogs?name=terrier').expect(200))
    it('should get 404', () =>
      agent.get('/dogs?name=sasdflkn').expect(404))
  });
});