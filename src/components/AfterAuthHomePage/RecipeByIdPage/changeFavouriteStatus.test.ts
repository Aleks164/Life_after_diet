import { changeFavouriteStatus } from "./changeFavouriteStatus";
import { listOfRecipesExample } from "@/utils/listOfRecipesExample";
import { singlRecipe } from "@/utils/singlRecipe";

describe("chooseClearAll test", () => {
  let setClientFavouriteSpy: jest.Mock;
  let setIsItInFafouritListSpy: jest.Mock;
  const сlientFavourite = listOfRecipesExample;
  const recipe = singlRecipe;

  beforeEach(() => {
    setClientFavouriteSpy = jest.fn();
    setIsItInFafouritListSpy = jest.fn();
  });
  afterEach(() => {
    setClientFavouriteSpy.mockClear();
    setIsItInFafouritListSpy.mockClear();
  });

  it("changeFavouriteStatus delete recipe from favouritelist if it was in it", () => {
    const isItInFafouritList = true;

    changeFavouriteStatus({
      setClientFavourite: setClientFavouriteSpy,
      setIsItInFafouritList: setIsItInFafouritListSpy,
      сlientFavourite,
      recipe,
      isItInFafouritList,
    });
    expect(setIsItInFafouritListSpy).toHaveBeenCalledWith(false);
    delete сlientFavourite[recipe.id];
    expect(setClientFavouriteSpy).toHaveBeenCalledWith(сlientFavourite);
  });
  it("changeFavouriteStatus add recipe to favouritelist if it wasn't in it", () => {
    const isItInFafouritList = false;
    delete сlientFavourite[recipe.id];
    const newFavourite = {
      ...сlientFavourite,
      [recipe.id]: {
        id: recipe.id,
        image: recipe.image,
        title: recipe.title,
        date: 1655880063288,
      },
    };
    Date.now = jest.fn(() => 1655880063288);

    changeFavouriteStatus({
      setClientFavourite: setClientFavouriteSpy,
      setIsItInFafouritList: setIsItInFafouritListSpy,
      сlientFavourite,
      recipe,
      isItInFafouritList,
    });
    expect(setIsItInFafouritListSpy).toHaveBeenCalledWith(true);
    expect(setClientFavouriteSpy).toHaveBeenCalledWith(newFavourite);
  });
  it("if setClientFavourite undefined clientFavourite wont save, isItInFafouritList = true", () => {
    const isItInFafouritList = true;

    changeFavouriteStatus({
      setClientFavourite: undefined,
      setIsItInFafouritList: setIsItInFafouritListSpy,
      сlientFavourite,
      recipe,
      isItInFafouritList,
    });
    expect(setClientFavouriteSpy).toHaveBeenCalledTimes(0);
  });
  it("if setClientFavourite undefined clientFavourite wont save,isItInFafouritList = false", () => {
    const isItInFafouritList = false;

    changeFavouriteStatus({
      setClientFavourite: undefined,
      setIsItInFafouritList: setIsItInFafouritListSpy,
      сlientFavourite,
      recipe,
      isItInFafouritList,
    });
    expect(setClientFavouriteSpy).toHaveBeenCalledTimes(0);
  });
});
