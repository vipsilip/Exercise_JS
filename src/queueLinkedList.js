function creatlinkedListQueue() {
  let head = null;
  let tail = null;
  function enqueue2(data) {
    const node = {
      data,
      next: null,
    };
    if (head == null) {
      head = tail = node;
    } else {
      node.next = head;
      head = node;
    }
    return head;
  }
  function enqueue(data) {
    const node = {
      data,
      next: null,
    };
    if (head == null) {
      head = tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
    return head;
  }

  // function dequeue() {
  //   if (head == null) return;
  //   let remove = head.data;
  //   head = head.next;
  //   return remove;
  // }
  // function isEmpty() {
  //   if (head != null) return false;
  //   return true;
  // }
  // function getSize() {
  //   if (head == null) return 0;
  //   let i = 0;
  //   while (head != null) {
  //     head = head.next;
  //     i++;
  //   }
  //   return i;
  // }
  // function getFront() {
  //   if (head == null) return undefined;
  //   return head.data;
  // }
  // function getBack() {
  //   if (head == null) return undefined;
  //   while (head.next != null) {
  //     head = head.next;
  //   }
  //   return head.data;
  // }
  function printList() {
    if (head == null) return;
    let curr = head;
    while (curr != null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
  return {
    enqueue,
    enqueue2,
    // dequeue,
    // isEmpty,
    // getSize,
    // getFront,
    // getBack,
    printList,
  };
}
const numberLinkedListQueue = creatlinkedListQueue();
numberLinkedListQueue.enqueue(1);
numberLinkedListQueue.enqueue(2);
numberLinkedListQueue.enqueue(3);
// numberLinkedListQueue.enqueue(4);
// numberLinkedListQueue.enqueue(5);
// numberLinkedListQueue.enqueue(6);
numberLinkedListQueue.enqueue2(10);
numberLinkedListQueue.enqueue2(9);
// console.log('remove:', numberLinkedListQueue.dequeue());

numberLinkedListQueue.printList();
// console.log(numberLinkedListQueue.isEmpty());
// console.log(numberLinkedListQueue.getSize());
// console.log(numberLinkedListQueue.getFront());
// console.log(numberLinkedListQueue.getBack());
