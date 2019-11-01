package firstUniqueCharacterInAString;

class Solution {
	
    public int firstUniqChar(String s) {
        if(s.isEmpty()) return -1;
        if(s.length() == 1) return 0;
        
        int[] alph = new int[26];
        
        for(int i=0; i<s.length(); i++){
            alph[s.charAt(i) - 'a']++;
        }
        
        int min = Integer.MAX_VALUE;

        for(int i=0; i<alph.length; i++){
            if(alph[i] == 1) {
                if(min > s.indexOf('a'+i)){
                    min = s.indexOf('a'+i);
                }
            }
        }
        
        return (min > s.length()-1)? -1 : min;
        
    }
}