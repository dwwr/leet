// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
  if (!node) {
    return
  }
  // assume node to delete is not last
  node.val = node.next!.val
  node.next = node.next!.next
}
