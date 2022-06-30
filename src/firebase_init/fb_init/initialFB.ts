import { keys } from "@/../keys";
import { initializeApp } from "firebase/app";
import * as FBdatabase from "firebase/database";

const firebaseConfig = keys.fbAPIKey;

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
