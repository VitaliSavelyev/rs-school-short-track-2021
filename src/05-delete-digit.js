/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const mass = String(n).split('');
  Number(mass.splice(mass.indexOf(String(Math.min.apply(null, mass))), 1));
  return Number(mass.join(''));
}

module.exports = deleteDigit;
