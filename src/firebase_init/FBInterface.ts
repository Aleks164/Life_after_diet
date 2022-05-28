/* eslint-disable class-methods-use-this */
import { DietResponsType, SettingType } from "../types/types";
import { database } from "./fb_init/initialFB";

export interface FBInterfaceType {
  getUserSettings(userName: string): Promise<SettingType | string>;
  getUserHistory(userName: string): Promise<DietResponsType>;
  addNewUserOnFB(userName: string, userSettings: SettingType): Promise<string>;
  updateUserSettings(userName: string, userSettings: SettingType): Promise<string>;
  updateUserHistory(userName: string, userHistory: DietResponsType): Promise<string>
}

export class FBInterface implements FBInterfaceType {

  async getUserSettings(userName: string) {
    const dbref = database.ref(database.db);
    return database
      .get(database.child(dbref, `users/${userName}/userSettings`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        }
        return `some problem with request data`;
      })
      .catch((error) => error);
  }

  async getUserHistory(userName: string) {
    const dbref = database.ref(database.db);
    return database
      .get(database.child(dbref, `users/${userName}/userHistory`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        }
        return `some problem with request data`;
      })
      .catch((error) => error);
  }

  async addNewUserOnFB(userName: string, userSettings: SettingType) {
    return database
      .set(
        database.ref(database.db, `users/${userName}`),
        { userSettings, history: [] }
      )
      .then(() => userName)
      .catch((error) => error);
  }

  async updateUserSettings(userName: string, userSettings: SettingType) {
    return database
      .update(
        database.ref(database.db, `users/${userName}`),
        userSettings
      )
      .then(() => userName)
      .catch((error) => error);
  }

  async updateUserHistory(userName: string, userHistory: DietResponsType) {
    return database
      .update(
        database.ref(database.db, `users/${userName}`),
        userHistory
      )
      .then(() => userName)
      .catch((error) => error);
  }
}
