package detectCapital;

class Solution {
	
    public boolean detectCapitalUse(String word) {
    	// cases 1) All letters in this word are capitals, like "USA".
    	// cases 2) All letters in this word are not capitals, like "leetcode".
    	// cases 3) Only the first letter in this word is capital, like "Google".
        
        int cases = 0;
        
        for(int i=0; i<word.length(); i++){
            char ch = word.charAt(i);
            if(ch >='a'){
                if(cases == 0) cases = 2;
                else if(cases == 1 && i > 1) return false;
                else if(cases == 1) cases = 3;
               
            } else {
                if(cases == 0) cases = 1;
                else if(cases == 2 || cases == 3) return false;  
                
            } 
        }

        return true;
    }
}
