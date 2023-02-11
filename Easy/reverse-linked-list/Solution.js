/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = (head) => {
  let [prev, current] = [null, head];

  const getNode = (prev, current) => {
    if (current) {
      [current.next, prev, current] = [prev, current, current.next];
      return getNode(prev, current);
    } else {
      return prev;
    }
  };

  return getNode(prev, current);
};
