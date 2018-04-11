// const Helpers = require('../src/services/Helpers');
import Helpers from '../src/services/Helpers';

describe('sum suite', function () {
  test('Should add 2 positive numbers together and return the result', function () {
    expect(Helpers.formatCentsToDollars(1000)).toBe('$10.00');
  });
})
