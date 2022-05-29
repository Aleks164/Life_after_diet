/* eslint-disable class-methods-use-this */
import { DietResponsType, SettingType } from "../types/types";
import { database } from "./fb_init/initialFB";

export type ParamNameType = "settings" | "history" | "favourite";


export type UpdatingParamType = SettingType | DietResponsType;


export interface FBInterfaceType {
  getUserParam(userName: string, paramName: ParamNameType): Promise<SettingType | string>;
  addNewUserOnFB(userName: string, userSettings: SettingType): Promise<string>;
  updateUserParam(userName: string, paramName: ParamNameType, updatingParam: UpdatingParamType): Promise<string>;
}

export class FBInterface implements FBInterfaceType {

  async getUserParam(userName: string, paramName: ParamNameType) {
    const dbref = database.ref(database.db);
    return database
      .get(database.child(dbref, `users/${userName}/${paramName}`))
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
        { userSettings, history: [], favourite: [] }
      )
      .then(() => userName)
      .catch((error) => error);
  }

  async updateUserParam(userName: string, paramName: ParamNameType, updatingParam: UpdatingParamType) {
    return database
      .update(
        database.ref(database.db, `users/${userName}/${paramName}`),
        updatingParam
      )
      .then(() => userName)
      .catch((error) => error);
  }
}
