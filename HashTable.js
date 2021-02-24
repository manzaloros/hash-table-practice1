/* eslint-disable no-multi-assign */
/* eslint-disable max-classes-per-file */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    const node = new Node(val);
    if (this.head === this.tail) {
      this.head.next = node;
      this.tail = node;
    } else if (this.head && this.head !== this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.tail = this.head = node;
    }
  }
}

function hashFunction(size) {

}

class HashTable {
  constructor(capacity) {
    this.storage = [];
    this.capacity = capacity;
    this.filled = 0;
  }

  insert(key, value) {

  }

  retrieve(key) {

  }
}

module.exports = { HashTable, LinkedList, hashFunction };
