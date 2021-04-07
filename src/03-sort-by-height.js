/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrx = [];
  arr.forEach((item, index) => {
    if (item === -1) {
      arrx.push(index);
    }
  });
  let arr1 = arr.sort((a, b) => a - b);
  arr1 = arr1.filter((item) => item !== -1);
  let k = 0;
  const z = -1;
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === arrx[k]) {
      arr2.push(z);
      k += 1;
    } else {
      arr2.push(arr1[0]);
      arr1.shift();
    }
  }
  return arr2;
}

module.exports = sortByHeight;
