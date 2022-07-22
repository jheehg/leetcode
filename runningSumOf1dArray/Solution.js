/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  let val = 0;
  return nums.map((num) => {
    return (val += num);
  });
};
