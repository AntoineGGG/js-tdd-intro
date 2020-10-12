// capitalizeFirst.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetter(input) {
  text = input
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
  return text;
}
// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetter, 'function');
// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirstLetter.length, 1);
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(
  capitalizeFirstLetter('i am learning react'),
  'I Am Learning React'
);
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetter('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetter(''), '');
