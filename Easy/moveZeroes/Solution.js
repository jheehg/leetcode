/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let arr = [];
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0)  {
            arr.push(i);
        } 
    }
    
    let z = 0;
    for(let j = 0; j < arr.length; j++) {
        nums.splice(arr[j]-z, 1);
        nums.push(0);
        z++;
    }
};