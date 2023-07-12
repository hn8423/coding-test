function isValid(s) {
  let stack = [];
  for (let p in s) {
    if (p === "(") {
      stack.push(")");
    } else if (p === "{") {
      stack.push("}");
    } else if (p === "[") {
      stack.push("]");
    } else if (!stack || stack.pop() !== p) {
      return false;
    }
  }
  return !stack;
}
