import { saveHistory } from "./saveHistory";

describe("saveHistory test", () => {
  const title = "test title";
  const image = "test image";
  const id = 123;
  const сlientHistory = {
    321: {
      id: 321,
      title: "old title",
      image: "old image",
    }
  };

  let setClientHistory: jest.Mock;

  beforeEach(() => {
    setClientHistory = jest.fn();
  });
  afterEach(() => {
    setClientHistory.mockClear();
  });

  it("saveHistory save a story element in a story", () => {
    Date.now = jest.fn(() => 1655880063288);
    saveHistory({
      title,
      image,
      id,
      сlientHistory, setClientHistory
    });
    const newStory = Object.assign(сlientHistory, {
      [id]: {
        title,
        image,
        id,
        date: 1655880063288
      }
    });
    expect(setClientHistory).toHaveBeenCalledWith(newStory
    );
  });
  it("saveHistory do nothing if setClientHistory is undefined", () => {
    Date.now = jest.fn(() => 1655880063288);
    saveHistory({
      title,
      image,
      id,
      сlientHistory, setClientHistory: undefined
    });
    expect(setClientHistory).toHaveBeenCalledTimes(0);
  });
});
