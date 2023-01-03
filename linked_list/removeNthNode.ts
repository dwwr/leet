class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let [fast, slow] = [head, head]
  let i = 0
  while (i < n) {
    console.log(fast)
    fast = fast!.next
    i++
  }
  if (!fast) {
    return head!.next
  }
  while (fast && fast.next) {
    fast = fast.next
    slow = slow!.next
  }

  slow!.next = slow!.next!.next
  return head
}
