/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  let pivot = 0;
  let leftSum = 0;
  let rightSum = nums.reduce((prev, curr) => prev + curr, 0);

  while (pivot < nums.length) {
    leftSum += pivot > 0 ? nums[pivot - 1] : 0;
    rightSum -= nums[pivot];
    if (leftSum === rightSum) return pivot;
    pivot++;
  }
  return -1;
};
