package wordPattern;

import java.util.HashMap;


class Solution {
    public boolean wordPattern(String pattern, String s) {
        String[] word = s.split(" ");
        char[] pt = pattern.toCharArray();
        if(word.length!= pt.length) return false;
        
        HashMap<String, Character> pttrns = new HashMap<>();
        int dup = 0, cnt = 0;
        
        for(int i=0; i<word.length; i++) {
            char val = pttrns.getOrDefault(word[i], pt[i]); 
            if(pttrns.get(word[i]) != null) dup++;
            if(val != pt[i]) cnt++;
            pttrns.put(word[i], val);
        }
        
        // 키 값 중복확인
        int[] res = new int[('z'-'a')+1];
        for(char pttrn : pttrns.values()) res[pttrn - 'a']++;
 
        for(int i=0; i<res.length; i++) {
            if(res[i] == 1) cnt++;
            if(res[i] >= 2) return false;
        }
        
        return (word.length-dup == cnt);
    }
}