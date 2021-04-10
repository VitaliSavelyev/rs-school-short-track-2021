/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let result = [];
  const result1 = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(' ');
      result.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  result = result.reverse();
  for (let k = 0; k < result.length; k++) {
    if (result[k] !== ' ') {
      counter++;
    } else if (counter === 1) {
      result1.push(result[k - 1]);
      counter = 0;
    } else {
      result1.push(counter + result[k - 1]);
      counter = 0;
    }
  }
  return result1.reverse().join('');
}

module.exports = encodeLine;
