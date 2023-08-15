//      REVERSE LINK LIST       //
////////////////////////////////

/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

// Iterative
var reverseList = function(head) {
    let prev = null
    let curr = head
    let next = null
    
    while(curr!== null){
        // save next
        next = curr.next
        // reverse
        curr.next = prev
        // advance prev and curr
        prev = curr
        curr = next
    }
    return prev;
};

//   ES6 code
var reverseList = function(head) {
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}

//   Recursive
Time: O(n)
Space: O(n)
var reverseList = function(head) {
	// base case
    if (head == null || head.next == null){
        return head;
    }
	// go all the way to the end
    let reversedListHead = reverseList(head.next)
	// add reverse myself
    head.next.next = head;
    head.next = null;
	// go up
    return reversedListHead
};

//      MERGE 2 SORTED LIST     //
////////////////////////////////

/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list. 

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

var mergeTwoLists = function(l1, l2) {
    let tempNode = new ListNode(0, null);
    let currentNode = tempNode;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            currentNode.next = l1;
            l1 = l1.next
        } else {
            currentNode.next = l2;
            l2 = l2.next
        }
        currentNode = currentNode.next;
    }
    currentNode.next = l1 || l2;
    
    return tempNode.next;
};

//      LINKED LIST CYCLE   //
/////////////////////////////

/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).


const hasCycle = (head) => {
    const seenNode = new Set();

    while (head) {
        if (seenNode.has(head)) return true;
        seenNode.add(head);
        head = head.next; // Move to the next node
    }

    return false; // Return false if we reached the end of the list without finding a cycle
 */

// Using Fast pointer, and a 'slow pointer'
const hasCycle = (head) => {
    let fast = head;
    while (fast && fast.next) {
      head = head.next;
      fast = fast.next.next;
      if (head === fast) return true;
    }
    return false;
  };
  