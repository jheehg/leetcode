package swapNodesInPairs;

class Solution {

    public ListNode swapPairs(ListNode head) {
        ListNode rootNode = null, nextNode = null, append = null;
        while(head != null) {
            if(head.next != null) {     // 페어 swap
                nextNode = head.next;
                head.next = nextNode.next;
                nextNode.next = head;

                // rootNode 저장.
                if(rootNode == null) rootNode = nextNode;
                // nextNode를 연결 해주기
                if(append != null) append.next = nextNode;

                append = head;
                head = head.next;

            } else {  // 하나만 남을 경우
                if(rootNode != null)  { append.next = head; break; }
                else return head;
            }
        }
        return rootNode;
    }
}