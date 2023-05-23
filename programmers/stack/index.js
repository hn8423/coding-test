function createStack() {
  const stack = [];

  function push(element) {
    stack.push(element);
  }

  function pop() {
    if (stack.length == 0) return "Underflow";
    return stack.pop();
  }

  function peek() {
    return stack[stack.length - 1];
  }

  function isEmpty() {
    return stack.length == 0;
  }

  function printStack() {
    let str = "";
    for (let i = 0; i < stack.length; i++) str += stack[i] + " ";
    return str;
  }

  return { push, pop, peek, isEmpty, printStack };
}
