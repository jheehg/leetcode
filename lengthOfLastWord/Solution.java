package lengthOfLastWord;

class Solution {
    public int lengthOfLastWord(String s) {
        String tr = s.trim();
        if(tr.isEmpty()) {
            return 0;
        } else {
            int n = tr.lastIndexOf(' ');
            if(n == -1) 
            	return tr.length();
            else
            	return (tr.length()-1)-n;

        }
       
    }
}