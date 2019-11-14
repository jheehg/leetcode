package longPressedName;

class Solution {
	
    public boolean isLongPressedName(String name, String typed) {
        if(name.equals(typed)) return true;
   
        StringBuilder sb = new StringBuilder();
        
        int j = 0;
        
        for(int i=0; i<typed.length(); i++){
            if(j > name.length()-1) {
            	break;
            } else if(typed.charAt(i) == name.charAt(j)){
                sb.append(typed.charAt(i));
                j++;
            } else {
                if((i == j && i == 0) 
                   || (typed.charAt(i) != name.charAt(j-1))){
                    return false;
                }
            }
        }
        
     return sb.toString().equals(name);
    
    }
}