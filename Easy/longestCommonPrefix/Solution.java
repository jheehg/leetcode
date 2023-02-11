package longestCommonPrefix;

import java.util.Arrays;

class Solution {
    public String longestCommonPrefix(String[] strs) {
        if(strs.length == 0) return ""; //문자열 아예 없으면 바로 리턴
        int minLen = 9999;
        int idx = -1;
        
        // strs중에서 가장 최소길이 요소 찾기
        for(int i=0; i<strs.length; i++){
            if(strs[i].length() < minLen){
                minLen = strs[i].length(); //shortest length
                idx = i; //index for minLen
            }
        }
        // 최소 길이의 요소 문자 배열화 하기
        char[] arr = strs[idx].toCharArray();
        int num = -1;
      
        // arr을 기준으로 반복문 돌며 동일한 문자 찾기
        for(int i=0; i<arr.length; i++){  
            for(int j=0; j<strs.length; j++){
                if(strs[j].charAt(i) != arr[i]){
                   arr = Arrays.copyOf(arr,num+1); // 하나라도 틀리면 바로 리턴
                   return new String(arr);
                }
             }
             num++; // 요소 모두 같은 인덱스에 같은 문자일 경우 +1
        }
        if(num < 0) return ""; // 중복된 문자가 없을 경우
        // 모두 같을 경우
        String output = new String(arr);
        return output;

    }
}
