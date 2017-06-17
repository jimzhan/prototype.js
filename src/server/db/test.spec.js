import { expect } from 'chai';
import Key from './index';
import * as regex from '../utils/regex';

describe('database utilities tests set', () => {
  before((done) => {
    done();
  });

  it('Generate 24-bit long unique Key in String', (done) => {
    const key = Key();
    /* eslint-disable */
    expect(key).to.not.be.null;
    /* eslint-enable */
    expect(key).to.be.a('string');
    expect(key).to.have.lengthOf(24);
    expect(key).to.match(regex.key);
    done();
  });
});
