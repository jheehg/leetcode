package summaryRanges;

import java.util.ArrayList;
import java.util.List;

class Solution {

    public List<String> summaryRanges(int[] nums) {
        List<String> res = new ArrayList<>();
        List<Integer> range = new ArrayList<>();
        
        if(nums.length < 1) return res;
        
        range.add(nums[0]); // 첫번째 정수 넣기
        int tmp = 0;
        for(int i=0; i<nums.length; i++) {
            if(i > 0 && (nums[i] > tmp + 1)) {
                range.add(tmp);
                if((int)range.get(0) == (int)range.get(1))   
                     res.add(Integer.toString(range.get(0)));
                    
                else if((int)range.get(0) < (int)range.get(1)) 
                     res.add(Integer.toString(range.get(0))+"->"+Integer.toString(range.get(1)));
                
                range.clear();
            }
            
            tmp = nums[i];
            if(i == nums.length -1) {
                range.add(tmp);
                int n = (nums.length == 1)? 1 : range.size();
                if(n > 1)   res.add(Integer.toString(range.get(0))+"->"+Integer.toString(range.get(1)));
                else res.add(Integer.toString(range.get(0)));
                return res;
            }

            if(range.size() == 0) range.add(tmp);  
           
        }
        return res;
    }
    
}