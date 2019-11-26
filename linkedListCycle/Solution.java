package linkedListCycle;

import java.util.HashSet;
import java.util.Set;


// Definition for singly-linked list.//
//class ListNode {
//     int val;
//     ListNode next;
//     ListNode(int x) {
//    	 val = x;
//    	 next = null;
//     }
//}
 

public class Solution {
	
    Set<ListNode> set = new HashSet<>();
    
    public boolean hasCycle(ListNode head) {
        while(head != null){
            if(!set.contains(head)) {
                set.add(head);
            } else {
                return true;
            }
            return hasCycle(head.next);
        }
       
        return false;
    }
    
   // head.val 이 아닌 ListNode로 비교하기
    
}