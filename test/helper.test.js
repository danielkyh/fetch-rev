// const Helpers = require('../src/services/Helpers');
import Helpers from '../src/services/Helpers';

describe('Helpers', function () {
  test('Should return a currency string in dollars', function () {
    expect(Helpers.formatCentsToDollars(1000)).toBe('$10.00');
    expect(Helpers.formatCentsToDollars(0)).toBe('$0.00');
  });
})
