package maxNumberOfBalloons;

public class Solution {
	
    public int maxNumberOfBalloons(String text) {
        int a = 0, b = 0, l = 0, o = 0, n = 0;
        
        for(int i=0; i<text.length(); i++){
            char ch = text.charAt(i);
            if(ch == 'b') b++;
              else if(ch == 'a') a++;
              else if(ch == 'l') l++;
              else if(ch == 'o') o++;
              else if(ch == 'n') n++;
              else continue;
        }
       
        if(l < 2 || o < 2 || a <= 0 || b <= 0 || n <= 0) return 0;
        int minTwo = 0, minOne = 0;
        
        minTwo = (o > l)? l : o;
        minOne = (a > b)? b : a;
        minOne = (minOne> n)? n: minOne;
        
        if(minTwo >= minOne*2) return minOne;
        else return minTwo/2; 
               
    
    /* 'a' - 'a' = 0
       'b' - 'a' = 1 
        minTwo/2 = minOne
    */
    }
}