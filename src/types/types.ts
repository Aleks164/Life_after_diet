import { NavigateFunction } from "react-router-dom";

export type DietResponsType = {
  id: number;
  title: string;
  image: string;
  imageType: string;
}[];

export type IsAuthType = { isAuth: null | string };

export type SignInType = (newUser: string, cb: NavigateFunction) => void;

export type SignOutType = (cb: NavigateFunction) => void;

export type UserType = string | null;

export type AuthKitType = {
  user: UserType;
  signIn: SignInType;
  signOut: SignOutType;
};

export type SettingType = { dietSelector: { diet: string, status: boolean }, cuisinesList: string[], intolerancesList: string[], ingridientsSelector: { ingridients: string[], status: boolean }, mealTypesSelector: { mealType: string, status: boolean }, excludeIngridientsSelector: { excludeIngridients: string[], status: boolean }, };

export type ChildrenType = { children: React.ReactElement };

export type LinkPropType = {
  children: React.ReactElement | string, to: string
}

export type MarkbookType = {
  curMarkbook: string;
  curInformation: string;
}

export type RecipeItemType = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export type IngridientsListType = {
  [name: string]: {
    name: string,
    id: string
  }
};

export type RecipeInfoType = RecipeItemType[] | "";

export type isLoadingType = boolean;


export type SetIsLoadingType = React.Dispatch<React.SetStateAction<isLoadingType>>;

export type SetSettingType = React.Dispatch<React.SetStateAction<SettingType>>;

export type SetRecipeInfo = React.Dispatch<React.SetStateAction<RecipeInfoType>>

export type RecipeListProps = { recipeInfo: RecipeItemType[] };

export type RecipeItemPropsType = { title: string; image: string; id: number };

export type SetCurMarkbook = React.Dispatch<React.SetStateAction<MarkbookType>>

export type SetRequestSettingsType = React.Dispatch<React.SetStateAction<SettingType>>

export type SettingParamType = { settings: SettingType };

export type DietDefenitionType = { [item: number]: string };

export type DietParamType = { settings: SettingType, setRequestSettings: SetRequestSettingsType, setRecipeInfo: SetRecipeInfo, setIsLoading: SetIsLoadingType };

export type BookmarkPropsType = {
  settings: SettingType,
  setRequestSettings: SetRequestSettingsType
}

export type tumblerParamFunction = (tumblerStatus: boolean, e: React.DragEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => void