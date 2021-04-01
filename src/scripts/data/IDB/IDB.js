import { openDB } from 'idb';
import CONFIG from '../../globals/config';

const { DATABASE_NAME, DATABASE_VERSION } = CONFIG;

const DB = (ObjectsStores, keyPath) => Promise.resolve(
  openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
      database.createObjectStore(ObjectsStores, {
        keyPath: keyPath,
      });
    },
  }),
);

export default DB;
