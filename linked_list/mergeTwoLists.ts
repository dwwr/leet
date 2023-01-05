class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let start = new ListNode()
  let newList = start
  let head = newList
  while (!!list1 || !!list2) {
    const [val1, val2] = [list1?.val, list2?.val]
    if (val1 === undefined) {
      newList.next = new ListNode(val2)
      newList = newList.next
      list2 = list2?.next || null
      continue
    }
    if (val2 === undefined) {
      newList.next = new ListNode(val1)
      newList = newList.next
      list1 = list1?.next || null
      continue
    }
    if (val1 <= val2) {
      newList.next = new ListNode(val1)
      list1 = list1?.next || null
    } else {
      newList.next = new ListNode(val2)
      list2 = list2?.next || null
    }
    newList = newList.next
  }
  return head.next
}

mergeTwoLists(new ListNode(-10, new ListNode(-6, new ListNode(-6))), null)
