module.exports = function reverse (n) {
  let str = '' + Math.abs(n);
  let result = '';
  for (i = 0; i < str.length; i++) {
     result = str[i] + result;
  }
  return (Number(result));
}
