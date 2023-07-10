class Node {
  //BST의 constructor를 구현합니다.
  constructor(value = 0, next = None) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  //BST의 constructor를 구현합니다.
  constructor() {
    this.head = None;
    this.tail = None;
  }
  append(value) {
    let new_node = new Node(value);
    if (this.head === None) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      this.tail = self.tail.next;
    }
  }

  get(idx) {
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.value;
  }

  insert(idx, value) {
    let current = this.head;
    let new_node = new Node(value);
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }
    new_node.next = current.next;
    current.next = new_node;
  }

  remove(idx) {
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }
}
