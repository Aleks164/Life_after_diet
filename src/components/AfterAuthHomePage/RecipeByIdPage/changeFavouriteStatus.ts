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
};

export function changeFavouriteStatus({
  сlientFavourite,
  setClientFavourite,
  recipe,
  isItInFafouritList
}: FafouriteParamsType) {
  if (isItInFafouritList) {
    console.log("delete");
    const filtredFavouritList = сlientFavourite.filter(
      (favoryEl) => {
        console.log(favoryEl.id, recipe.id)
        return favoryEl.id !== recipe.id
      }
    );
    console.log(filtredFavouritList);
    if (setClientFavourite) setClientFavourite(filtredFavouritList);
  } else {
    console.log("add");
    const newFavourite = {
      id: recipe.id,
      image: recipe.image,
      title: recipe.title
    };
    сlientFavourite.push(newFavourite);
    if (setClientFavourite) setClientFavourite(сlientFavourite);
  }
}
