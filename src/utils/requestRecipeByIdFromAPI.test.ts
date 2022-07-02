import { requestRecipeByIdFromAPI } from "./requestRecipeByIdFromAPI";

jest.mock("../API_KEYS", () => ({ API_KEYS: { SPOON_API_KEY: "someApiKey" } }));

describe("recipeRequestCreator test", () => {
  const realFeatch = window.fetch;

  afterEach(() => {
    window.fetch = realFeatch;
  });

  it("requestRecipeByIdFromAPI returns expected data from API", async () => {
    window.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve("test"),
        ok: true,
      }) as Promise<Response>;
    const result = await requestRecipeByIdFromAPI("id");

    expect(result).toBe("test");
  });
  it("requestRecipeByIdFromAPI returns error message from API if recipe doesn't exist", async () => {
    window.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve({ message: "some message" }),
        ok: true,
      }) as Promise<Response>;

    const result = await requestRecipeByIdFromAPI("id").catch((e) => e.message);

    expect(result).toBe("request denied");
  });
  it("requestRecipeByIdFromAPI returns expected error if sth wrong with API", async () => {
    window.fetch = () => Promise.reject();

    const result = await requestRecipeByIdFromAPI("id").catch((e) => e.message);

    expect(result).toBe("request denied");
  });
});
