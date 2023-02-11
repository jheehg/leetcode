package plusOne;

class Solution {
    public int[] plusOne(int[] digits) {

        for(int i = digits.length-1; i >=0; i--) {
            if(digits[i] == 9) {
                digits[i] = (i == 0)? 1 : 0;
            } else {
                digits[i]++;
                return digits;
            }
        }
        // 모두 9일경우
        int[] ans = new int[digits.length+1];
        System.arraycopy(digits, 0, ans, 0, digits.length);

        return ans;
    }
}