import {
  DietResponsType,
  SetFavouriteType,
  RecipeType
} from "../../../types/types";

export type FafouriteParamsType = {
  сlientFavourite: DietResponsType;
  setClientFavourite: SetFavouriteType | undefined;
  recipe: RecipeType["recipe"];
  isItInFafouritList: boolean;
  setIsItInFafouritList: React.Dispatch<React.SetStateAction<boolean>>;
};

export function changeFavouriteStatus({
  сlientFavourite,
  setClientFavourite,
  recipe, isItInFafouritList, setIsItInFafouritList
}: FafouriteParamsType) {

  console.log(isItInFafouritList)
  if (isItInFafouritList) {
    console.log("delete", сlientFavourite);

    delete сlientFavourite[recipe.id];
    console.log("deleted", сlientFavourite);
    if (setClientFavourite) setClientFavourite(сlientFavourite);
    setIsItInFafouritList(!isItInFafouritList);
  } else {
    console.log("add");
    const newFavourite = {
      ...сlientFavourite,
      [recipe.id]: {
        id: recipe.id,
        image: recipe.image,
        title: recipe.title
      }
    };
    if (setClientFavourite) setClientFavourite(newFavourite);
    setIsItInFafouritList(!isItInFafouritList);
  }
}
