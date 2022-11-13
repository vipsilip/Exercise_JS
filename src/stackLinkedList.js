function creatlinkedListStack() {
  let head = null;
  function push(data) {
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

  function pop() {
    if (head == null) return;
    let remove = head.data;
    head = head.next;
    return remove;
  }
  function isEmpty() {
    if (head != null) return false;
    return true;
  }
  function getSize() {
    if (head == null) return 0;
    let i = 0;
    while (head != null) {
      head = head.next;
      i++;
    }
    return i;
  }
  function getTop() {
    if (head == null) return undefined;
    return head.data;
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
    push,
    pop,
    isEmpty,
    getSize,
    getTop,
    printList,
  };
}
const numberLinkedListStack = creatlinkedListStack();
numberLinkedListStack.push(1);
numberLinkedListStack.push(2);
numberLinkedListStack.push(3);
numberLinkedListStack.push(4);
numberLinkedListStack.push(5);
numberLinkedListStack.push(6);
console.log('remove: ', numberLinkedListStack.pop());

// numberLinkedListStack.printList();
// console.log(numberLinkedListStack.isEmpty());
// console.log(numberLinkedListStack.getSize());
console.log(numberLinkedListStack.getTop());
