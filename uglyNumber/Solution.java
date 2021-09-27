class Solution {
    public boolean isUgly(int n) {
        int[] arr = {2, 3, 5};

        int i = 0;
        while(i < arr.length) {
            if(n <=1) break;
            if(n % arr[i] == 0)  n/=arr[i];
            else i++;
        }
        return n == 1;
    }
}