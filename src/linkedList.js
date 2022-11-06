function createLinkedList() {
  let head = null;

  function getHead() {
    return head;
  }
  function getTail() {
    if (head == null) return;
    let tail = head;
    while (tail.next != null) {
      tail = tail.next;
    }
    return tail;
  }
  function getSize() {
    if (head == null) return 0;
    let size = 0;
    while (head != null) {
      size++;
      head = head.next;
    }
    return size;
  }
  function findIndexByData(data) {
    if (head == null) return -1;
    let index = 0;
    while (head != null) {
      if (head.data === data) return index;
      index++;
      head = head.next;
    }
    return -1;
  }
  function findWithCallback(callback) {
    if (head == null) return undefined;
    while (head != null) {
      if (callback(head.data)) return head.data;
      head = head.next;
    }
    return undefined;
  }

  function insertHead(newData) {
    const node = {
      data: newData,
      next: null,
    };
    if (head == null) {
      head = node;
      return;
    }
    node.next = head;
    head = node;
  }
  function insertTail(data) {
    const node = {
      data: data,
      next: null,
    };
    if (head == null) {
      head = node;
      return head;
    }
    // let tail = head;
    // while (tail.next != null) {
    //   tail = tail.next;
    // }
    tail = getTail();
    tail.next = node;
    tail = node;
    // return head;
  }
  function insertBeforePosition(data, position) {
    const node = {
      data: data,
      next: null,
    };
    if (head == null) {
      head = node;
      return;
    }
    if (position <= 0) return insertHead(data);
    if (position >= getSize()) return insertTail(data);
    let idx = 0;
    let after = head;
    let prev = head;
    while (idx < position) {
      prev = after;
      after = prev.next;
      idx++;
    }
    node.next = after;
    prev.next = node;
  }
  function printList() {
    if (head == null) return;
    while (head != null) {
      console.log(head.data);
      head = head.next;
    }
  }
  return {
    getHead,
    getTail,
    getSize,
    findIndexByData,
    findWithCallback,
    insertHead,
    insertTail,
    insertBeforePosition,
    printList,
  };
}
const numberLinkedList = createLinkedList();
numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);
numberLinkedList.insertTail(6);
// 1->2->3->4->5->10
// numberLinkedList.insertBeforePosition(7, 6);
numberLinkedList.printList();
// console.log(numberLinkedList.getHead());
// console.log(numberLinkedList.getTail());
// console.log(numberLinkedList.getSize());
// console.log(numberLinkedList.findIndexByData(5));
// console.log(numberLinkedList.findIndexByData(6));
// console.log(numberLinkedList.findWithCallback((x) => x % 2 === 0));
// console.log(numberLinkedList.findWithCallback((x) => x > 4));
