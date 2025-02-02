/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  let x = 0;
  let j = 0;
  let k = 0;
  let i = 1;
  for (j = 0; j < matrix[0].length; j++) {
    result += matrix[0][j];
  }
  for (i = 1; i < matrix.length; i++) {
    for (k = 0; k < matrix[i].length; k++) {
      if (matrix[i - 1][k] !== 0) {
        x += matrix[i][k];
      }
    }
  }
  return x + result;
}

module.exports = getMatrixElementsSum;
