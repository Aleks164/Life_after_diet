import { NavigateOptions } from "react-router-dom";
import { SetSettingType, SettingType } from "../components/AuthHomePage/markbooksSwitcher";

export type DietResponsType = {
  id: number;
  title: string;
  image: string;
  imageType: string;
}[];
export type IsAuthType = { isAuth: null | string };

export type CbType = (to: string, options?: NavigateOptions | undefined) => void;
export type UserType = string | null;

export type AuthKitType = {
  user: UserType;
  signIn: (newUser: string, cb: () => CbType) => void;
  signOut: (cb: () => CbType) => void;
};

export type ChildrenType = { children: React.ReactElement };
export type LinkPropType = {
  children: React.ReactElement | string, to: string
}

export type DietDefenitionType = { [item: number]: string };
export type DietParamType = { settings: SettingType, setRequestSettings: SetSettingType };