'use strict';

const expect = require('chai').expect;
const sample = require('../app/sample');

describe('Sample', () => {
  it('should work', () => expect(sample(1, 2)).to.equal(3));
});
