class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            this.tail = newNode;
        }
    }

    get(index) {
        let current = this.head;
        let i = 0;

        while (current) {
            if (i === index) {
                return current.data;
            }

            current = current.next;
            i++;
        }

        return null;
    }

    insert(index, data) {
        if (index === 0) {
            const newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let i = 0;

        while (current) {
            if (i === index - 1) {
                const newNode = new Node(data);
                newNode.next = current.next;
                current.next = newNode;
                return;
            }

            current = current.next;
            i++;
        }
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let i = 0;

        while (current) {
            if (i === index - 1) {
                current.next = current.next.next;
                return;
            }

            current = current.next;
            i++;
        }
    }
}

// Usage example
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.insert(3, 5);
linkedList.remove(3);
console.log(linkedList.tail.data)