package bestTimeToBuyAndSellStock;

class Solution {
    public int maxProfit(int[] prices) {
        if(prices.length<2) return 0;
        
        int max = Integer.MIN_VALUE;
        int min = prices[0];
        
        for(int i=1; i<prices.length; i++){
            int profit = prices[i]-min;
            
            if(profit >= 0) {
                if(profit > max) max = profit;
                if(min >= prices[i-1]) min = prices[i-1];
            } else {
                if(min >= prices[i]) min = prices[i];
            }
           
        }
        
        return (max > 0)? max : 0;
        
    }
}