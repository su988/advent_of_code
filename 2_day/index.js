const fs = require('fs');
const input = fs
  .readFileSync('./input.txt', 'utf8')
  .split('\n')
  .map((item) => item.split(' '));

// Part One

const checkPass = (arr) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    const min = arr[i][0].split('-')[0];
    const max = arr[i][0].split('-')[1];

    const check = arr[i][1].split('')[0];
    const letters = arr[i][2].split('');

    let sum = 0;

    for (let j = 0; j < letters.length; j++) {
      if (letters[j] === check) {
        sum += 1;
      }
    }

    if (sum <= max && sum >= min) {
      res += 1;
    }
  }
  return res;
};

// console.log(checkPass(input));

// Part Two

const checkPass2 = (arr) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    const pos1 = arr[i][0].split('-')[0];
    const pos2 = arr[i][0].split('-')[1];

    const check = arr[i][1].split('')[0];
    const str = arr[i][2].split('');

    let sum = 0;
    if (str[pos1 - 1] === check) {
      sum += 1;
    }

    if (str[pos2 - 1] === check) {
      sum += 1;
    }

    if (sum < 2 && sum > 0) {
      res += 1;
    }
  }
  return res;
};

console.log(checkPass2(input));
