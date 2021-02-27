const { HashTable, LinkedList } = require('./HashTable');

describe('LinkedList', () => {
  let list = null;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('it has an add to tail method', () => {
    expect(typeof list.addToTail).toBe('function');
  });

  test('adding to the tail adds nodes to storage', () => {
    list.addToTail(1);
    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(1);

    list.addToTail(2);
    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(2);

    list.addToTail(3);
    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(3);
  });

  it('has a contains method that returns true if a value is in the list', () => {
    list.addToTail(1);
    expect(list.contains(1)).toBe(true);

    const tuple = ['key', 'value'];
    list.addToTail(tuple);
    expect(list.contains(tuple)).toBe(true);
  });

  it('has a remove method that removes a node', () => {
    list.addToTail('Harry Potter');
    list.remove('Harry Potter');
    expect(list.contains('Harry Potter')).toBe(false);
  });
});

describe('hash table', () => {
  let hashTable = null;
  const capacity = 10;

  beforeEach(() => {
    hashTable = new HashTable(capacity);
  });

  it('is initialized with the correct capacity', () => {
    expect(hashTable.capacity).toBe(capacity);
  });

  it('has storage that is initialized with capacity number of linked lists', () => {
    expect(hashTable.storage.length).toBe(10);
    expect(hashTable.storage[0] instanceof LinkedList).toBe(true);
  });

  it('has insert and retrieve methods', () => {
    expect(typeof hashTable.insert).toBe('function');

    expect(typeof hashTable.retrieve).toBe('function');
  });

  it('has storage that will contain an inserted value', () => {
    hashTable.insert('dog', 'lenny');
    let exists = false;
    for (let i = 0; i < hashTable.storage.length; i += 1) {
      const bucket = hashTable.storage[i];
      if (bucket.head) {
        if (bucket.head.val[0] === 'dog'
      && bucket.head.val[1] === 'lenny') {
          exists = true;
          break;
        }
      }
    }
    expect(exists).toBe(true);
  });

  it('has a retrieve method that will return the inserted key', () => {
    const [key, val] = ['George', 'Costanza'];
    const [key2, val2] = ['Jerry', 'Seinfeld'];
    hashTable.insert(key, val);
    expect(hashTable.retrieve(key)).toBe(val);

    hashTable.insert(key2, val2);
    expect(hashTable.retrieve(key2)).toBe(val2);

    hashTable.insert(key, val);
    expect(hashTable.retrieve(key)).toBe(val);

    hashTable.insert(key, val);
    expect(hashTable.retrieve(key)).toBe(val);
  });

  it('returns undefined if trying to return a value that is not in storage', () => {
    expect(hashTable.retrieve('Elaine')).toBeUndefined();
  });

  it('should not contain removed nodes', () => {
    hashTable.insert(1);
    hashTable.remove(1);
    expect(hashTable.retrieve(1)).toBeUndefined();
    expect(hashTable.remove('Dog Diggity')).toBeUndefined();
  });
});
