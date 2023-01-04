class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let list: number[] = []
  let node = head
  if (!node) {
    return null
  }
  while (node) {
    list.push(node.val)
    node = node.next
  }
  let newNode = new ListNode(list.pop())
  let newHead = newNode
  while (list.length) {
    newNode.next = new ListNode(list.pop())
    newNode = newNode.next
  }
  return newHead
}
