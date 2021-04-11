/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let node = l;
  while (node.next !== null) {
    if (node.value === k) {
      node.value = node.next.value;
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return l;
}
/*
  }
  while (currentNode) {
    if (currentNode.value === k) {
      if (prevNode) {
        prevNode.next = currentNode.next;
      } else {
        currentNode = currentNode.next;
      }
    } else {
      // переходим к следующим узлам
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  return currentNode; */
/*
  let head = l;
  const prev = null;
  while (head) {
    if (head.value === k) {
      if (prev) {
        prev.next = head.next;
      } else {
        head = head.next;
      }
    }
  }
  return head; */

module.exports = removeKFromList;
