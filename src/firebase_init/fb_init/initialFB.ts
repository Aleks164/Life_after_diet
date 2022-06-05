import { initializeApp } from "firebase/app";
import * as FBdatabase from "firebase/database";
// import { app } from "../..";

const firebaseConfig = {
  apiKey: "AIzaSyDxdPNvL8leleeU8m76kCXcC6hOr3ueNjg",
  authDomain: "lifeafterdiets-30c24.firebaseapp.com",
  databaseURL: "https://lifeafterdiets-30c24-default-rtdb.firebaseio.com",
  projectId: "lifeafterdiets-30c24",
  storageBucket: "lifeafterdiets-30c24.appspot.com",
  messagingSenderId: "543791507558",
  appId: "1:543791507558:web:8aae671c3298a6b16365a7",
  measurementId: "G-1EXMBFBYM8",
};

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
