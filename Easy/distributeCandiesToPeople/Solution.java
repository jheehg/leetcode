package distributeCandiesToPeople;

import java.util.Arrays;

public class Solution {
	
    public int[] distributeCandies(int candies, int num_people) {
        int cnt = 0, i = 0;
        int[] result = new int[num_people];
       
        while(true){
            cnt++;
            if(candies - cnt < 0) break;
            candies -= cnt;
            result[i] += cnt;
            if(i == (num_people-1)) {
                i = 0;
            } else {
                i++;
            }
        }
        result[i] += candies;
        
        return result;
    }
	
}
