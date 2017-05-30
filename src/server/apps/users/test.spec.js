import { expect } from 'chai';
import * as models from './models';

describe('Users unit tests', () => {
  before((done) => {
    done();
  });

  it('should find list of users', (done) => {
    const users = models.find();
    expect(users).to.have.property('data');
    done();
  });

  it('should get user with specific key', (done) => {
    const key = 'abc';
    const user = models.get(key);
    expect(user).to.have.property('data');
    expect(user.data).to.have.property(key);
    done();
  });

  it('should create a new user', (done) => {
    const user = models.create();
    expect(user).to.have.property('data');
    /* eslint-disable */
    expect(user.data).to.not.be.null;
    /* eslint-enable */
    done();
  });

  it('should update an existing user', (done) => {
    const key = 'abc';
    const user = models.update(key);
    expect(user).to.have.property('data');
    expect(user.data[key]).to.have.property('username');
    done();
  });
});
