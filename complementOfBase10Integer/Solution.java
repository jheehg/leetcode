package complementOfBase10Integer;

import java.util.ArrayList;
import java.util.List;

class Solution {
    public int bitwiseComplement(int N) {
        List<Integer> arr = new ArrayList<>();
        
        while(N > 1){
            arr.add(N % 2);
            N/=2; //  N >>= 1;
        }
        if(N == 0){
            arr.add(0);
        } else {
            arr.add(1);
        }
        // or using toBinaryString()
        
        
        int result = 0;
        
        for(int i=arr.size()-1; i>=0; i--){
            int n = (arr.get(i) == 1)? 0 : 1;
            result+= ((int)Math.pow(2, i)) * n;
        }
        //or using Integer.parseInt(string, 2) 
        
        return result;
       
    }
}