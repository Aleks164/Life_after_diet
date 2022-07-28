import { FafouriteParamsType } from "../../../types/types";

export function changeFavouriteStatus({
  сlientFavourite,
  setClientFavourite,
  recipe,
  isItInFafouritList,
  setIsItInFafouritList,
}: FafouriteParamsType) {
  if (isItInFafouritList) {
    delete сlientFavourite[recipe.id];
    if (setClientFavourite) setClientFavourite(сlientFavourite);
    setIsItInFafouritList(!isItInFafouritList);
  } else {
    const newFavourite = {
      ...сlientFavourite,
      [recipe.id]: {
        id: recipe.id,
        image: recipe.image,
        title: recipe.title,
        date: Date.now(),
      },
    };
    if (setClientFavourite) setClientFavourite(newFavourite);
    setIsItInFafouritList(!isItInFafouritList);
  }
}
