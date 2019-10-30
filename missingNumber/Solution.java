package missingNumber;

class Solution {
	
    public int missingNumber(int[] nums) {
    	
        int n = nums.length;
        
        int ans = ((int)Math.pow(n, 2) + n)/2;
        
        int sum = 0;
        for(int i=0; i<nums.length; i++){
            sum+=nums[i];
        }
        
        return ans - sum; 
             
        //  0         sum: 0
        //  0 1       sum: 1       
        //  0 1 2     sum: 3
        //  0 1 2 3   sum: 6
        //  ...
      
    }
}