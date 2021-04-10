/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    const spl = domains[i].split('.').reverse();
    for (let j = 1; j < spl.length; j++) {
      spl[j] = `${spl[j - 1]}.${spl[j]}`;
    }
    for (let k = 0; k < spl.length; k++) {
      const counter = 1;
      if ((`.${spl[k]}`) in obj) {
        obj[`.${spl[k]}`]++;
      } else {
        obj[`.${spl[k]}`] = counter;
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
