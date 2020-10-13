const assert = require('assert');
const capitalizeFirstLetter = require('../capitalizeFirst');

describe('capitalizeFirstLetter', () => {
  it('is a function accepting one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetter, 'function');
    assert.strictEqual(capitalizeFirstLetter.length, 1);
  });

  it('transforms the sentence correctly', () => {
    assert.strictEqual(
      capitalizeFirstLetter('i am learning react'),
      'I Am Learning React'
    );
  });

  it('works with a &-character strin', () => {
    assert.strictEqual(capitalizeFirstLetter('z'), 'Z');
  });

  it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirstLetter(''), '');
  });
});
