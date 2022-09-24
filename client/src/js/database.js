import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// DONE: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  //connect to db and version
  const jateDb = await openDB('jate', 1);
  //creates transaction specifying the db  and  privileges
  const tx = jateDb.transaction('jate', 'readwrite');
  //open object store
  const store = tx.objectStore('jate');
  //store.put to update data
  const request = store.put({ id: id, contents: content });
  //confirm request and log result
  const result = await request;
  console.log("Data saved to the daatabase", result);
};

// DONE: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET from the database");
  const jateDb = await openDB('jate', 1);
  //readonly to get data
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  //getAll to get all data from the database
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();