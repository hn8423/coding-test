function createQueue() {
  const queue = [];

  function enqueue(element) {
    queue.push(element);
  }

  function dequeue() {
    if (queue.length == 0) return "Underflow";
    return queue.shift();
  }

  function front() {
    if (queue.length == 0) return "No elements in Queue";
    return queue[0];
  }

  function isEmpty() {
    return queue.length == 0;
  }

  function printQueue() {
    let str = "";
    for (let i = 0; i < queue.length; i++) str += queue[i] + " ";
    return str;
  }

  return { enqueue, dequeue, front, isEmpty, printQueue };
}
