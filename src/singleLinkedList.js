function creatlinkedList() {
  let head = null;
  function insertHead(data) {
    const node = {
      data,
      next: null,
    };
    if (head == null) head = node;
    else {
      node.next = head;
      head = node;
    }
    return head;
  }
  function insertTail(data) {
    const node = {
      data,
      next: null,
    };
    if (head == null) head = node;
    else {
      let tail = head;
      while (tail.next != null) {
        tail = tail.next;
      }
      tail.next = node;
    }
    return head;
  }
  function insertBeforePosition(data, position) {
    if (position <= 0 || head == null) return insertHead(data);
    let prev = head;
    let curr = head;
    let i = 0;
    while (curr != null && i < position) {
      prev = curr;
      curr = prev.next;
      i++;
    }
    const node = {
      data,
      next: curr,
    };
    prev.next = node;
    return head;
  }
  function removeHead() {
    if (head != null) head = head.next;
    return head;
  }
  function removeTail() {
    if (head == null) return;
    if (head.next == null) return (head = null);
    let prev = head;
    let curr = head;
    while (curr.next != null) {
      prev = curr;
      curr = prev.next;
    }
    prev.next = null;
    tail = prev;
    return head;
  }
  function removeAtPosition(position) {
    if (head == null || position <= 0) return removeHead();
    let prev = head;
    let curr = head;
    let i = 0;
    while (curr.next != null && i < position) {
      prev = curr;
      curr = prev.next;
      i++;
    }
    prev.next = curr.next;
    return head;
  }
  function printList() {
    if (head == null) return;
    let curr = head;
    while (curr != null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
  return {
    insertHead,
    insertTail,
    insertBeforePosition,
    removeHead,
    removeTail,
    removeAtPosition,
    printList,
  };
}
const numberLinkedList = creatlinkedList();
numberLinkedList.insertHead(6);
numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);
// numberLinkedList.insertTail(7);
// numberLinkedList.insertBeforePosition(10, 0);
// numberLinkedList.removeHead();
// numberLinkedList.removeTail();
numberLinkedList.removeAtPosition(9);
numberLinkedList.printList();
