package perfectNumber;

class Solution {
	
    public boolean checkPerfectNumber(int num) {
    	
        if(num % 2 == 1 || num == 0) return false;
        
        int n = num/2;
        int sum = n + 3;
    
        while(true){
            if(n % 2 != 0) break;
            n/=2;
            if(num % n == 0) sum += ((num/n)+n);
        }
        
        return sum == num;
      
    }
}
