const fs = require('fs');
const input = fs
  .readFileSync('./input.txt', 'utf8')
  .split('\n')
  .filter((s) => s !== '');

console.log(input);
