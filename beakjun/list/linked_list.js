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

//  ll = LinkedList()
//  ll.append(1)
//  ll.append(2)
//  ll.append(3)
//  ll.append(4)
//  ll.append(5)
//  ll.remove(3)
//  print(ll.get(3))

// 양방향 링크드 리스트
class ListNode {
  constructor(val = 0, next = None, prev = None) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class BrowserHistory {
  constructor(homepage) {
    this.head = this.current = new ListNode((val = homepage));
  }

  visit(url) {
    this.current.next = new ListNode((val = url), (prev = this.current));
    this.current = this.current.next;
    return None;
  }
  back(steps) {
    while (steps > 0 && this.current.prev !== None) {
      steps -= 1;
      this.current = this.current.prev;
    }
    return this.current.val;
  }
  back(steps) {
    while (steps > 0 && this.current.prev !== None) {
      steps -= 1;
      this.current = this.current.next;
    }
    return this.current.val;
  }
}

// # browserHistory = BrowserHistory("leetcode.com");
// # browserHistory.visit("google.com");
// # browserHistory.visit("facebook.com");
// # browserHistory.visit("youtube.com");
// # browserHistory.back(1);
// # browserHistory.back(1);
// # browserHistory.forward(1);
// # browserHistory.visit("linkedin.com");
// # browserHistory.forward(2);
// # browserHistory.back(2);
// # browserHistory.back(7);
