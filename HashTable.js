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
    if (!this.head) {
      this.tail = this.head = node;
    } else if (this.head === this.tail) {
      this.head.next = node;
      this.tail = node;
    } else if (this.head && this.head !== this.tail) {
      this.tail.next = node;
      this.tail = node;
    }
  }

  contains(val) {
    if (!this.head) return false;
    let node = this.head;

    while (node) {
      if (!Array.isArray(val)) {
        if (node.val === val) return true;
      } else if (Array.isArray(val) && val.length === 2) {
        if (val[0] === node.val[0]) return true;
      }
      node = node.next;
    }

    return false;
  }

  remove(val) {
    if (this.head === null) return;
    if (Array.isArray(val)) {
      const key = val[0];
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else if (this.head.next === this.tail) {
        if (this.head.val[0] === key) {
          this.head = this.tail;
        }
      } else if (this.tail.val[0] === key) {
        this.tail = this.head;
        this.tail.next = null;
      }
    } else if (typeof val !== 'object' && val !== null) {
      const node = this.head;
      if (node.next === null) {
        this.head = this.tail = null;
        return;
      }
      if (node.val === val && node.next === null) {
        this.head = this.tail = null;
        return;
      }

      while (node) {
        if (node.next.val === val) {
          node.next = node.next.next;
        }
      }
    }
  }
}

class HashTable {
  constructor(capacity) {
    this.storage = Array.from(Array(10), () => new LinkedList());
    this.capacity = capacity;
    this.filled = 0;
  }

  getHashIndex(key) {
    return key.toString().length % this.capacity;
  }

  insert(key, value) {
    const tuple = [key, value];
    const hashIndex = this.getHashIndex(key);
    this.storage[hashIndex].addToTail(tuple);
  }

  retrieve(key) {
    const hashIndex = this.getHashIndex(key);
    const bucket = this.storage[hashIndex];

    if (!bucket.head) return undefined;

    if (bucket.tail === bucket.head) {
      return bucket.tail.val[1];
    }

    if (bucket.tail.val[0] === key) {
      return bucket.tail.val[1];
    }

    if (bucket.head.val[0] === key) {
      return bucket.head.val[1];
    }

    return undefined;
  }

  remove(val) {
    const hashIndex = this.getHashIndex(val);
    const bucket = this.storage[hashIndex];

    bucket.remove(val);
  }
}

module.exports = { HashTable, LinkedList };
