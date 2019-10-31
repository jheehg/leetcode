package bullsAndCows;

class Solution {
    public String getHint(String secret, String guess) {
        // both digit and position are right (called "bulls")  = A
        // digit is right but locate in the wrong position (called "cows") = B

        int a = 0;
        int b = 0;
        char[] scr = secret.toCharArray();
        char[] gus = guess.toCharArray();
        for(int i=0; i<gus.length; i++){
            if(gus[i] == scr[i]) {
                a++;
                scr[i] = 'a';
                gus[i] = 'a';
            }   
        }
     
        for(int i=0; i<gus.length; i++){
            for(int j=0; j<scr.length; j++){
                if(i != j && gus[i] == scr[j] && scr[j] != 'a') {
                    b++;
                    scr[j] = 'a';
                    break;
                }    
            }
        }
       
        return a+"A"+b+"B";  
        
        /*
         * ==> better solution
         * 
         * int[] gus = new int[10];
         * int[] scr = new int[10];
         * 
         * for(int i=0; i<guess.length(); i++){
         * 	  if(guess.charAt[i] == secret.charAt[i]){
         * 		 a++;
         * 	  }else {
         * 	     gus[guess.charAt[i] - '0']++;
         *       scr[guess.charAt[i] - '0']++;
         *    }
         * }
         * for(int i=0; i<gus.length; i++){
         * 		 b+=Math.min(gus[i], scr[i]);
         * }
         * .
         * .
         * 매칭되는 숫자 제외하고 나오는 숫자 카운팅 후 
         * position은 안맞아도 존재한다면 존재하는 수 만큼 cows증가 
         * 
         */
        
      
    }
}