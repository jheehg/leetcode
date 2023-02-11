package addTwoNumbers;

class Solution {
	public ListNode addNode(ListNode ln1, ListNode ln2, ListNode ln, ListNode lnRst, int n) {
		int sum = 0;
		if(ln1 == null && ln2 == null) {
			if(n==1) ln.val = 1;
			return lnRst;
		}
		
		if(ln1 != null) sum += ln1.val;
		if(ln2 != null) sum += ln2.val;
		sum += n;
		if(sum > 9) n = 1;
		else n = 0;
		
		ln.val = sum <= 9? sum : sum - 10;

		
		if(((ln1 != null && ln1.next != null) || (ln2 != null && ln2.next != null)) ||
		  (((ln1 != null && ln1.next == null) || (ln2 != null && ln2.next == null)) && n == 1)) {
			ln.next = new ListNode();
		}
		
		return addNode(ln1 != null? ln1.next : null,
					   ln2 != null? ln2.next : null,
					   ln.next,
					   lnRst,
					   n);
	}
	
	public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
		ListNode ln = new ListNode();
		return addNode(l1, l2, ln, ln, 0);
	}
	
	
}
