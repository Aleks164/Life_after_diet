import { requestRecipeListFromAPi } from "./requestRecipeListFromAPi";
import * as Key from "../../keys";

describe("requestRecipeListFromAPi test", () => {
  const realFeatch = window.fetch;

  afterEach(() => {
    window.fetch = realFeatch
  })

  Key.keys.spoonAPIKey = "someApiKey";

  it("requestRecipeListFromAPi returns expected data from API", async () => {

    window.fetch = () =>
      Promise.resolve({ json: () => Promise.resolve("test"), ok: true }) as Promise<Response>;
    const result = await requestRecipeListFromAPi("queryString");

    expect(result).toBe("test");
  });
  it("requestRecipeListFromAPi returns expected error if sth wrong with API", async () => {

    window.fetch = () =>
      Promise.reject();

    const result = await requestRecipeListFromAPi("id").catch((e) => e.message);

    expect(result).toBe("request denied");
  });
});
