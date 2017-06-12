import supertest from 'supertest';
import { should } from 'chai';
import server from '../../src/server';
import config from '../../src/server/config';

should();
const request = supertest.agent(server.listen());
const baseUrl = `${config.urls.prefix}/users/`;

describe('Users', () => {
  before((done) => {
    done();
  });

  describe(`GET ${baseUrl}`, () => {
    it('should get list of users', (done) => {
      request
        .get(baseUrl)
        .set('Accept', 'application/json')
        .expect(200, (err, res) => {
          if (err) { return done(err); }
          res.body.should.have.property('data');
          done();
        });
    });
  });

  describe(`GET ${baseUrl}:key`, () => {
    it('should user with specific key', (done) => {
      const key = 'abc';
      request
        .get(`${baseUrl}${key}`)
        .set('Accept', 'application/json')
        .expect(200, (err, res) => {
          if (err) { return done(err); }
          res.body.should.have.property('data');
          res.body.data.should.have.property(key);
          done();
        });
    });
  });

  describe(`POST ${baseUrl}`, () => {
    it('should create a new user', (done) => {
      request
        .post(`${baseUrl}`)
        .set('Accept', 'application/json')
        .expect(201, (err, res) => {
          if (err) { return done(err); }
          res.body.should.have.property('data');
          done();
        });
    });
  });

  describe(`PUT ${baseUrl}:key`, () => {
    it('should update an existing user', (done) => {
      const key = 'abc';
      request
        .put(`${baseUrl}${key}`)
        .set('Accept', 'application/json')
        .expect(200, (err, res) => {
          if (err) { return done(err); }
          res.body.should.have.property('data');
          res.body.data.should.have.property(key);
          done();
        });
    });
  });

  describe(`DELETE ${baseUrl}:key`, () => {
    it('should delete an existing user', (done) => {
      const key = 'abc';
      request
        .delete(`${baseUrl}${key}`)
        .set('Accept', 'application/json')
        .expect(204, done);
    });
  });
});
