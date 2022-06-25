import { showRecipes } from "./showRecipes";
import { listOfRecipesExample } from "@/utils/listOfRecipesExample";
import { defaultSettings } from "@/utils/defaultSettings";
import * as requestRecipe from "@/utils/requestRecipeListFromAPi";
import * as requestCreator from "@/utils/recipeRequestCreator";
import { SettingType } from "@/types/types";

describe("flipRecipePage test", () => {

  const settings = defaultSettings;
  let navigateSpy: jest.Mock;
  let setClientSettingsSpy: jest.Mock;
  let setIsLoadingSpy: jest.Mock;
  let requestCreatorSpy: jest.SpyInstance<string, [settings: SettingType, skipedPages?: number | undefined]>

  beforeEach(() => {
    navigateSpy = jest.fn();
    setClientSettingsSpy = jest.fn();
    setIsLoadingSpy = jest.fn();
    requestCreatorSpy = jest
      .spyOn(requestCreator, "recipeRequestCreator")
      .mockReturnValue("test");
  });
  afterEach(() => {
    navigateSpy.mockClear();
    setClientSettingsSpy.mockClear();
    setIsLoadingSpy.mockClear();
    requestCreatorSpy.mockClear();
  });

  it("show recipe list page if API is available", async () => {

    const requestRecipeSpy = jest
      .spyOn(requestRecipe, "requestRecipeListFromAPi")
      .mockResolvedValue(listOfRecipesExample);

    await showRecipes({
      setClientSettings: setClientSettingsSpy,
      settings,
      setIsLoading: setIsLoadingSpy,
      navigate: navigateSpy,
    });

    expect(setClientSettingsSpy).toHaveBeenCalledWith(settings);
    expect(setIsLoadingSpy).toHaveBeenCalledTimes(
      2
    );
    expect(setIsLoadingSpy).toHaveBeenLastCalledWith(
      false
    );

    expect(requestRecipeSpy).toHaveBeenCalledWith("test");
    expect(navigateSpy).toHaveBeenCalledTimes(1);
  });
  it("show main page if API is unavailable", async () => {
    const requestRecipeSpy = jest
      .spyOn(requestRecipe, "requestRecipeListFromAPi")
      .mockRejectedValue(listOfRecipesExample);

    await showRecipes({
      setClientSettings: setClientSettingsSpy,
      settings,
      setIsLoading: setIsLoadingSpy,
      navigate: navigateSpy,
    });

    expect(setClientSettingsSpy).toHaveBeenCalledWith(settings);
    expect(setIsLoadingSpy).toHaveBeenCalledWith(
      true
    );
    expect(requestRecipeSpy).toHaveBeenCalledWith("test");
    expect(navigateSpy).toHaveBeenCalledWith("/Life_after_diet/");
  });
  it("show recipe list page if API is available, but setClientSettings is undefined", async () => {

    const requestRecipeSpy = jest
      .spyOn(requestRecipe, "requestRecipeListFromAPi")
      .mockResolvedValue(listOfRecipesExample);

    await showRecipes({
      setClientSettings: undefined,
      settings,
      setIsLoading: setIsLoadingSpy,
      navigate: navigateSpy,
    });

    expect(setClientSettingsSpy).toHaveBeenCalledTimes(0);
    expect(setIsLoadingSpy).toHaveBeenCalledTimes(
      2
    );
    expect(setIsLoadingSpy).toHaveBeenLastCalledWith(
      false
    );

    expect(requestRecipeSpy).toHaveBeenCalledWith("test");
    expect(navigateSpy).toHaveBeenCalledTimes(1);
  });
});
