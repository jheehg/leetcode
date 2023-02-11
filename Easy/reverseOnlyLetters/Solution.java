package reverseOnlyLetters;

class Solution {
	
    public String reverseOnlyLetters(String S) {
        StringBuilder sb = new StringBuilder();
      
        for(int i=S.length()-1; i>=0; i--){
        	if(Character.isLetter(S.charAt(i))) {
        		sb.append(S.charAt(i));
            } 
        }
        
        StringBuilder rs = new StringBuilder();
        
        int k = 0, l = 0;
        while(l < S.length()){
           char letter = S.charAt(l);
           
           if(!Character.isLetter(letter)) {
              rs.append(letter);
           } else {
              rs.append(sb.charAt(k));
              k++;
           }
          l++;    
        }
            
        return rs.toString();
    }
}
