package onesAndZeroes;


class Solution {
    private int max(int a, int b) {
        return (a > b)? a : b;
    }
    
    public int findMaxForm(String[] strs, int m, int n) {
        int[][][] dp = new int[strs.length + 1][m + 1][n + 1];
      
        for(int i = 0; i <= strs.length; i++) { 
            for(int j = 0;  j <= m; j++) {
                for(int k = 0; k <= n; k++) { 
                    if(i == 0 || j + k == 0) {
                        dp[i][j][k] =  0;
                    } else { 
                        int ones = 0, zeroes = 0;
                        for(int z = 0; z < strs[i - 1].length(); z++) {
                            if(strs[i - 1].charAt(z) == '0') zeroes++;
                            else ones++;
                        }
                        if(zeroes > j || ones > k) {
                            dp[i][j][k] = dp[i - 1][j][k];
                        } else {
                            dp[i][j][k] = max(1 + dp[i - 1][j - zeroes][k- ones], dp[i - 1][j][k]);
                        }
                    }
                }
            }
        }
        
        return dp[strs.length][m][n];
    }
    
}