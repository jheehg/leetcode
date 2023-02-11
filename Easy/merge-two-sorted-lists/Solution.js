/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  let nodeVal = 0;
  if (list1 || list2) {
    if ((list1 && list2 && list1.val < list2.val) || (list1 && !list2)) {
      nodeVal = list1.val;
      list1 = list1.next;
    } else if (
      (list1 && list2 && list1.val >= list2.val) ||
      (!list1 && list2)
    ) {
      nodeVal = list2.val;
      list2 = list2.next;
    }
    return new ListNode(nodeVal, mergeTwoLists(list1, list2));
  } else {
    return null;
  }
};
