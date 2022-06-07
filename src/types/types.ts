import { NavigateFunction } from "react-router-dom";
import { RecipeResponsType } from "../information";

export type DietResponsType = {
  [id: number]: {
    id: number;
    title: string;
    image: string;
    imageType?: string;
  };
};

export type IsAuthType = { isAuth: null | string };

export type SignInType = (newUser: string, cb: NavigateFunction) => void;

export type SignOutType = (cb: NavigateFunction) => void;

export type SignUpType = (
  newUser: string,
  cb: NavigateFunction
) => Promise<void>;

export type UserType = string | null;

export type BeforeLoginPagePathType = string;

export type SetBeforeLoginPagePathType = React.Dispatch<
  React.SetStateAction<BeforeLoginPagePathType>
>;

export type AuthKitType = {
  user: UserType;
  signIn: SignInType;
  signOut: SignOutType;
  beforeLoginPagePath: BeforeLoginPagePathType;
  setBeforeLoginPagePath: SetBeforeLoginPagePathType;
};

export type SettingType = {
  dietSelector: { diet: string; status: boolean };
  cuisinesList: string[];
  intolerancesList: string[];
  ingridientsSelector: { ingridients: string[]; status: boolean };
  mealTypesSelector: { mealType: string; status: boolean };
  excludeIngridientsSelector: { excludeIngridients: string[]; status: boolean };
  maxCaloriesInput: { value: number; status: boolean };
};

export type ChildrenType = { children: React.ReactElement };

export type LinkPropType = {
  children: React.ReactElement | string;
  to: string;
};

export type MarkbookType = {
  curMarkbook: string;
  curInformation: string;
};

export type RecipeItemType = {
  id: number;
  title: string;
  image: string;
  imageType?: string;
};

export type SetRecipeItemType = React.Dispatch<
  React.SetStateAction<RecipeItemType[]>
>;

export type IngridientsListType = {
  [name: string]: {
    name: string;
    id: string;
  };
};

export type RecipeInfoType = RecipeItemType[] | "";

export type isLoadingType = boolean;

export type SetIsLoadingType = React.Dispatch<
  React.SetStateAction<isLoadingType>
>;

export type SetSettingType = React.Dispatch<React.SetStateAction<SettingType>>;

export type HistoryFavouriteTypes = DietResponsType;

export type SetHistoryType = React.Dispatch<
  React.SetStateAction<DietResponsType>
>;

export type SetFavouriteType = React.Dispatch<
  React.SetStateAction<DietResponsType>
>;

export type SetRecipeInfo = React.Dispatch<
  React.SetStateAction<RecipeItemType[]>
>;

export type PageNumberType = number;

export type SetPageNumberType = React.Dispatch<
  React.SetStateAction<PageNumberType>
>;

export type RecipeListProps = {
  recipeInfo: RecipeItemType[];
  setRecipeInfo: SetRecipeInfo;
  pageNumber: PageNumberType;
  setPageNumber: SetPageNumberType;
};

export type RecipeItemPropsType = { title: string; image: string; id: number };

export type SetCurMarkbook = React.Dispatch<React.SetStateAction<MarkbookType>>;

export type SetRequestSettingsType = React.Dispatch<
  React.SetStateAction<SettingType>
>;

export type SettingParamType = { settings: SettingType };

export type ClientSettingsType = {
  сlientSettings: SettingType;
};

export interface ViewRecipeParamType extends SettingParamType {
  isLoading: isLoadingType;
  setIsLoading: SetIsLoadingType;
  setRequestSettings: SetRequestSettingsType;
}

export type DietDefenitionType = { [item: number]: string };

export type DietParamType = {
  settings: SettingType;
  setRequestSettings: SetRequestSettingsType;
  setRecipeInfo: SetRecipeInfo;
  setIsLoading: SetIsLoadingType;
};

export type BookmarkPropsType = {
  settings: SettingType;
  setRequestSettings: SetRequestSettingsType;
};

export type tumblerParamFunction = (
  tumblerStatus: boolean,
  e:
    | React.DragEvent<HTMLDivElement>
    | React.MouseEvent<HTMLDivElement, MouseEvent>
) => void;

export type Step = number;
export type Description = string;

export type RecipeType = {
  recipe: RecipeResponsType;
};
