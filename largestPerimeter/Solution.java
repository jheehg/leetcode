package largestPerimeter;

import java.util.Arrays;

class Solution {
    public int largestPerimeter(int[] A) {
     
        Arrays.sort(A);
        
        for(int i=A.length-1; i>=0; i--){
//            if(i < 2) 
//                return 0; 
//			 * 3 <= A.length <= 10000
        	if(A[i-1] + A[i-2] > A[i]) { 
                return A[i]+A[i-1]+A[i-2];
            }
        }
        return 0;
    }
}