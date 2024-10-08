import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error("putDb not implemented");

  const db = await openDB("jate", 1);

  const tx = contactDb.transaction("jate", "readwrite");

  const store = tx.objectStore("jate");

  const request = store.add(content);

  const result = await request;

  console.log("result", result);
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error("getDb not implemented");

  const contactDb = await openDB("jate", 1);

  const tx = contactDb.transaction("jate", "readonly");

  const store = tx.objectStore("jate");

  const request = store.getAll();

  const result = await request;

  console.log("result.value", result);

  return result;
};

// Making the function to delete the DB.

export const deleteDb = async (id) => {
  console.log("Delete from the DB", id);

  const contactDb = await openDB("jate", 1);

  const tx = contactDb.transaction("jate", "readwrite");

  const store = tx.objectStore("jate");

  const request = store.delete(id);

  const result = await request;

  console.log("result.value", result);

  return result?.value;
};

initdb();
