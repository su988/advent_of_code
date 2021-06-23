const fs = require('fs');
const input = fs
  .readFileSync('./input.txt', 'utf8')
  .split('\n')
  .filter((s) => s !== '')
  .map(Number);

const target = 2020;

const twoSum = (arr, target) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (obj.hasOwnProperty(arr[i])) return console.log(arr[i] * complement);
    obj[complement] = i;
  }

  return [];
};

// twoSum(input, target);

const threeSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (
          nums[i] + nums[j] + nums[k] === target &&
          nums[i] !== nums[j] &&
          nums[j] !== nums[k] &&
          nums[k] !== nums[i]
        ) {
          return console.log(nums[i] * nums[j] * nums[k]);
        }
      }
    }
  }
};

threeSum(input, target);
