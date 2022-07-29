import { nextItem } from "./nextItem";

describe("nextItem test", () => {
  // eslint-disable-next-line no-promise-executor-return
  const sleep = (x: number) => new Promise((resolve) => setTimeout(resolve, x));

  const current = document.createElement("div");

  const caruselItemsList = ["red", "blue", "green", "black", "white"];
  const togleAnimation = { current } as unknown as React.MutableRefObject<null>;

  let setCurItemSpy: jest.Mock;
  let setIsPresedSpy: jest.Mock;

  beforeEach(() => {
    setCurItemSpy = jest.fn();
    setIsPresedSpy = jest.fn();
    current.innerHTML =
      "<div><div class='slide'></div><div class='slide'></div><div class='slide'></div><div class='slide'></div><div class='slide'></div></div>";
  });
  afterEach(() => {
    setCurItemSpy.mockClear();
    setIsPresedSpy.mockClear();
  });

  it("nextItem sweetch slide from 1 to 2 if step is 1", async () => {
    const step = 1;
    const curItem = 1;
    const newIndex = step + curItem;

    nextItem(step, {
      curItem,
      setCurItem: setCurItemSpy,
      setIsPresed: setIsPresedSpy,
      togleAnimation,
      caruselItemsList,
    });
    const allColor = (
      togleAnimation.current as unknown as HTMLDivElement
    ).querySelectorAll(".slide");

    expect(setIsPresedSpy).toHaveBeenCalledWith(true);

    expect(allColor[newIndex].classList).toEqual(
      expect.objectContaining({ "1": "slideHiden", "2": "moveToStart" })
    );
    expect(allColor[curItem].classList).toEqual(
      expect.objectContaining({ "1": "slideInRightMove" })
    );

    await sleep(1001);

    expect(allColor[newIndex].classList).toEqual(
      expect.not.objectContaining({
        "0": "slideHiden",
        "1": "slideHiden",
        "2": "moveToStart",
      })
    );
    expect(allColor[curItem].classList).toEqual(
      expect.objectContaining({ "1": "slideHiden", "0": "slide" })
    );

    expect(setIsPresedSpy).toHaveBeenCalledWith(false);
    expect(setCurItemSpy).toHaveBeenCalledWith(newIndex);
  });
  it("nextItem sweetch slide from 0 to last if step is 1", async () => {
    const step = -1;
    const curItem = 0;

    nextItem(step, {
      curItem,
      setCurItem: setCurItemSpy,
      setIsPresed: setIsPresedSpy,
      togleAnimation,
      caruselItemsList,
    });
    const allColor = (
      togleAnimation.current as unknown as HTMLDivElement
    ).querySelectorAll(".slide");
    const newIndex = allColor.length - 1;

    expect(setIsPresedSpy).toHaveBeenCalledWith(true);

    expect(allColor[newIndex].classList).toEqual(
      expect.objectContaining({ "1": "slideHiden", "2": "moveToStart" })
    );
    expect(allColor[curItem].classList).toEqual(
      expect.objectContaining({ "1": "slideInLeftMove" })
    );

    await sleep(1001);

    expect(allColor[newIndex].classList).toEqual(
      expect.not.objectContaining({
        "0": "slideHiden",
        "1": "slideHiden",
        "2": "moveToStart",
      })
    );
    expect(allColor[curItem].classList).toEqual(
      expect.objectContaining({ "1": "slideHiden", "0": "slide" })
    );

    expect(setIsPresedSpy).toHaveBeenCalledWith(false);
    expect(setCurItemSpy).toHaveBeenCalledWith(newIndex);
  });
  it("nextItem sweetch slide from last to first if step is 1", async () => {
    const allColor = (
      togleAnimation.current as unknown as HTMLDivElement
    ).querySelectorAll(".slide");

    const step = 1;
    const curItem = allColor.length - 1;
    const newIndex = 0;

    nextItem(step, {
      curItem,
      setCurItem: setCurItemSpy,
      setIsPresed: setIsPresedSpy,
      togleAnimation,
      caruselItemsList,
    });

    expect(setIsPresedSpy).toHaveBeenCalledWith(true);

    expect(allColor[newIndex].classList).toEqual(
      expect.objectContaining({ "1": "slideHiden", "2": "moveToStart" })
    );
    expect(allColor[curItem].classList).toEqual(
      expect.objectContaining({ "1": "slideInRightMove" })
    );

    await sleep(1001);

    expect(allColor[newIndex].classList).toEqual(
      expect.not.objectContaining({
        "0": "slideHiden",
        "1": "slideHiden",
        "2": "moveToStart",
      })
    );
    expect(allColor[curItem].classList).toEqual(
      expect.objectContaining({ "1": "slideHiden", "0": "slide" })
    );

    expect(setIsPresedSpy).toHaveBeenCalledWith(false);
    expect(setCurItemSpy).toHaveBeenCalledWith(newIndex);
  });
  it("nextItem sweetch slide from 1 to 3", async () => {
    const allColor = (
      togleAnimation.current as unknown as HTMLDivElement
    ).querySelectorAll(".slide");

    const step = { index: 3 };
    const curItem = 1;
    const newIndex = 3;

    nextItem(step, {
      curItem,
      setCurItem: setCurItemSpy,
      setIsPresed: setIsPresedSpy,
      togleAnimation,
      caruselItemsList,
    });

    expect(setIsPresedSpy).toHaveBeenCalledWith(true);

    expect(allColor[newIndex].classList).toEqual(
      expect.objectContaining({ "1": "slideHiden", "2": "moveToStart" })
    );
    expect(allColor[curItem].classList).toEqual(
      expect.objectContaining({ "1": "slideInRightMove" })
    );

    await sleep(1001);

    expect(allColor[newIndex].classList).toEqual(
      expect.not.objectContaining({
        "0": "slideHiden",
        "1": "slideHiden",
        "2": "moveToStart",
      })
    );
    expect(allColor[curItem].classList).toEqual(
      expect.objectContaining({ "1": "slideHiden", "0": "slide" })
    );

    expect(setIsPresedSpy).toHaveBeenCalledWith(false);
    expect(setCurItemSpy).toHaveBeenCalledWith(newIndex);
  });
  it("nextItem sweetch slide from last to previous if step is -1", async () => {
    const allColor = (
      togleAnimation.current as unknown as HTMLDivElement
    ).querySelectorAll(".slide");

    const step = -1;
    const curItem = allColor.length - 1;
    const newIndex = curItem + step;

    nextItem(step, {
      curItem,
      setCurItem: setCurItemSpy,
      setIsPresed: setIsPresedSpy,
      togleAnimation,
      caruselItemsList,
    });

    expect(setIsPresedSpy).toHaveBeenCalledWith(true);

    expect(allColor[newIndex].classList).toEqual(
      expect.objectContaining({ "1": "slideHiden", "2": "moveToStart" })
    );
    expect(allColor[curItem].classList).toEqual(
      expect.objectContaining({ "1": "slideInLeftMove" })
    );

    await sleep(1001);

    expect(allColor[newIndex].classList).toEqual(
      expect.not.objectContaining({
        "0": "slideHiden",
        "1": "slideHiden",
        "2": "moveToStart",
      })
    );
    expect(allColor[curItem].classList).toEqual(
      expect.objectContaining({ "1": "slideHiden", "0": "slide" })
    );

    expect(setIsPresedSpy).toHaveBeenCalledWith(false);
    expect(setCurItemSpy).toHaveBeenCalledWith(newIndex);
  });
});
