package twoSum;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = null;
        outer:
        for(int i=0; i<nums.length-1; i++){
            for(int j=1+i; j<nums.length; j++){ 
                int sum = nums[i]+nums[j];
                if(sum == target) {
                    result = new int[]{i, j};
                    break outer;
                    
                }
            }
        }
        return result;
    }
}