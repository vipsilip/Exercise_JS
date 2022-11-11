// CAU TRUC DU LIEU VA GIAI THUAT
function createCityLinkedList() {
  let head = null;
  let tail = null;
  function findValue(data) {
    // if (head == null) return -1;
    let curr = head;
    let i = 0;
    while (curr != null) {
      if (data['Ma Tinh'] === curr.data['Ma Tinh']) return i;
      curr = curr.next;
      i++;
    }
    return -1;
  }
  function insertHead(data) {
    const node = {
      data,
      next: null,
    };
    if (head == null) {
      tail = head = node;
    } else {
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
    if (tail == null) {
      head = tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
    return head;
  }
  function insertAnyPosition(data, position) {
    if (head == null || position <= 0) return insertHead(data);
    let curr = head;
    let prev = head;
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
    if (head == null) return;
    head = head.next;
    return head;
  }
  function removeTail() {
    if (head == null) return;
    let curr = head;
    let prev = head;
    while (curr.next != null) {
      prev = curr;
      curr = prev.next;
    }
    prev.next = null;
    tail = prev;
    return head;
  }
  function removeAnyPosition(position) {
    if (head == null || position <= 0) return removeHead();
    let curr = head;
    let prev = head;
    let i = 0;
    while (curr != null && i < position) {
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
    findValue,
    insertHead,
    insertTail,
    insertAnyPosition,
    removeHead,
    removeTail,
    removeAnyPosition,
    printList,
  };
}
const cityLinkedList = createCityLinkedList();
cityLinkedList.insertHead({
  'Ma Tinh': 1,
});
cityLinkedList.insertHead({
  'Ma Tinh': 2,
});
cityLinkedList.insertHead({
  'Ma Tinh': 3,
});
cityLinkedList.insertTail({
  'Ma Tinh': 4,
});
cityLinkedList.insertTail({
  'Ma Tinh': 5,
});
cityLinkedList.insertAnyPosition(
  {
    'Ma Tinh': 99,
  },
  5
);
// cityLinkedList.removeHead();
// cityLinkedList.removeTail();
// cityLinkedList.removeAnyPosition(2);
console.log(cityLinkedList.findValue({ 'Ma Tinh': 5 }));
// cityLinkedList.printList();
