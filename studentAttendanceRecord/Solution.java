package studentAttendanceRecord;

class Solution {
    public boolean checkRecord(String s) {
        // A student could be rewarded if his attendance record doesn't contain 
        // more than one 'A' (absent) or more than two continuous 'L' (late).
        
        if(s.indexOf("LLL") != -1) 
        	return false;
        else if(s.indexOf('A')!=-1){
            if(s.indexOf('A') != s.lastIndexOf('A')) 
            	return false;
        }
        
        return true; 
    }
}