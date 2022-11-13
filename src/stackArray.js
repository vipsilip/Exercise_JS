function createStackArray() {
  const stack = [];
  function insert(data) {
    stack.push(data);
    return stack;
  }
  function remove() {
    return stack.pop();
  }
  function isEmpty() {
    return stack.length === 0;
  }
  function getTop() {
    return stack.length > 0 ? stack[stack.length - 1] : undefined;
  }
  function getSize() {
    return stack.length;
  }
  function printList() {
    console.log(stack);
  }
  return {
    insert,
    remove,
    isEmpty,
    getTop,
    getSize,
    printList,
  };
}
const numberStackArray = createStackArray();
numberStackArray.insert(1);
numberStackArray.insert(2);
numberStackArray.insert(3);
numberStackArray.insert(4);
numberStackArray.insert(5);
numberStackArray.insert(6);
numberStackArray.insert(7);
console.log(numberStackArray.remove());
console.log(numberStackArray.isEmpty());
console.log(numberStackArray.getTop());
console.log(numberStackArray.getSize());
numberStackArray.printList();
