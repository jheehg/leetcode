package canPlaceFlowers;

class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
    	
        if(n == 0) return true;
    
        int cnt = 0;
        int prev, next, curr;
        
        for(int i=0; i<flowerbed.length; i++){
            prev = (i>0)? flowerbed[i-1] : 0;
            next = (i<flowerbed.length-1)? flowerbed[i+1] : 0;
            curr = flowerbed[i];
            
            if(prev == 0 && next == 0 && curr == 0) {
                cnt++;
                flowerbed[i] = 1;
            }
        }
        
        return cnt >= n;
        
    }
}