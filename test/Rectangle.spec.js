const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
  it('is a function with a constructor with 2 arguments', () => {
    assert.strictEqual(typeof Rectangle, 'function');
  });
  it('isSquare function verify that our rectangle is a square', () => {
    let square = new Rectangle(5, 5);
    assert.strictEqual(square.isSquare(), true);
  });
  it('it should return the correct area', () => {
    let area = new Rectangle(20, 10);
    assert.strictEqual(area.getArea(), 200);
  });
  it('it should return correct perrimeter ', () => {
    let perimeter = new Rectangle(2, 2);
    assert.strictEqual(perimeter.getPerimeter(), 8);
  });
});
