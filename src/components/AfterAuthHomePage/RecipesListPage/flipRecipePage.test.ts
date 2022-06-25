import { flipRecipePage } from "./flipRecipePage";
import { listOfRecipesExample } from "@/utils/listOfRecipesExample";
import { defaultSettings } from "@/utils/defaultSettings";
import * as requestRecipe from "@/utils/requestRecipeListFromAPi";
import * as requestCreator from "@/utils/recipeRequestCreator";

describe("flipRecipePage test", () => {
  const сlientSettings = defaultSettings;
  const skipedPages = 1;
  const pageNumber = 1;
  let navigateSpy: jest.Mock;
  let setPageNumberSpy: jest.Mock;

  beforeEach(() => {
    navigateSpy = jest.fn();
    setPageNumberSpy = jest.fn();
  });
  afterEach(() => {
    navigateSpy.mockClear();
    setPageNumberSpy.mockClear();
  });

  it("show recipe list page if API is available", async () => {
    const requestRecipeSpy = jest
      .spyOn(requestRecipe, "requestRecipeListFromAPi")
      .mockResolvedValue(listOfRecipesExample);
    const requestCreatorSpy = jest
      .spyOn(requestCreator, "recipeRequestCreator")
      .mockReturnValue("test");

    const resultNumberPage = pageNumber + skipedPages;

    await flipRecipePage(skipedPages, {
      сlientSettings,
      pageNumber,
      navigate: navigateSpy,
      setPageNumber: setPageNumberSpy,
    });

    expect(requestCreatorSpy).toHaveBeenCalledWith(
      сlientSettings,
      resultNumberPage
    );
    expect(requestRecipeSpy).toHaveBeenCalledWith("test");
    expect(navigateSpy).toHaveBeenCalledTimes(1);
    expect(setPageNumberSpy).toHaveBeenCalledWith(resultNumberPage);
  });
  it("show main page if API is unavailable", async () => {
    const requestRecipeSpy = jest
      .spyOn(requestRecipe, "requestRecipeListFromAPi")
      .mockRejectedValue(listOfRecipesExample);
    const requestCreatorSpy = jest
      .spyOn(requestCreator, "recipeRequestCreator")
      .mockReturnValue("test");

    const resultNumberPage = pageNumber + skipedPages;

    await flipRecipePage(skipedPages, {
      сlientSettings,
      pageNumber,
      navigate: navigateSpy,
      setPageNumber: setPageNumberSpy,
    });

    expect(requestCreatorSpy).toHaveBeenCalledWith(
      сlientSettings,
      resultNumberPage
    );
    expect(requestRecipeSpy).toHaveBeenCalledWith("test");
    expect(navigateSpy).toHaveBeenCalledTimes(1);
    expect(setPageNumberSpy).toHaveBeenCalledWith(resultNumberPage);
  });
});
