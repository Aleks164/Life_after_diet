import { initializeApp } from "firebase/app";
import * as FBdatabase from "firebase/database";
import { API_KEYS } from "../../API_KEYS";

const firebaseConfig = API_KEYS.FB_API_KEYS;

export const app = initializeApp(firebaseConfig);

export const database = {
  db: FBdatabase.getDatabase(app),
  get: FBdatabase.get,
  child: FBdatabase.child,
  ref: FBdatabase.ref,
  set: FBdatabase.set,
  remove: FBdatabase.remove,
  update: FBdatabase.update,
};
export const offline = () => FBdatabase.goOffline(database.db);
