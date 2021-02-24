const { HashTable } = require('./HashTable');

describe('hash table', () => {
  let hashTable = null;

  beforeEach(() => {
    hashTable = new HashTable(10);
  });

  it('has insert and retrieve methods', () => {
    expect(typeof hashTable.insert).toBe('function');

    expect(typeof hashTable.retrieve).toBe('function');
  });
});
