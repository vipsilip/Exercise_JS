function createQueueArray() {
  const queue = [];
  function insert(data) {
    queue.push(data);
    return queue;
  }
  function remove() {
    return queue.shift();
  }
  function isEmpty() {
    return queue.length === 0;
  }
  function getTop() {
    return queue.length > 0 ? queue[0] : undefined;
  }
  function getSize() {
    return queue.length;
  }
  function printList() {
    console.log(queue);
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
const numberQueueArray = createQueueArray();
numberQueueArray.insert(1);
numberQueueArray.insert(2);
numberQueueArray.insert(3);
numberQueueArray.insert(4);
numberQueueArray.insert(5);
numberQueueArray.insert(6);
numberQueueArray.insert(7);
console.log(numberQueueArray.remove());
console.log(numberQueueArray.isEmpty());
console.log(numberQueueArray.getTop());
console.log(numberQueueArray.getSize());
numberQueueArray.printList();
