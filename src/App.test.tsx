/* eslint-disable no-promise-executor-return */
import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { App } from "./App";

import { textP } from "./components/DefultPage/DefultPage";
import "@testing-library/jest-dom";

const sleep = (x: number) => new Promise((r) => setTimeout(r, x));

describe("DefultPage", () => {
  it("test hr at DOM", async () => {
    await act(async () => {
      const spyPrompt = jest.spyOn(window, "prompt");
      spyPrompt.mockReturnValueOnce("Hr").mockReturnValueOnce("");
      const { container } = render(<App isLokiTest={false} sleepMs={0} />);
      await sleep(50);
      const classAllHr = container.querySelector(".hr");
      expect(classAllHr).toBeInTheDocument();
    });
  });
  it("test Paragraph components", async () => {
    await act(async () => {
      const spyPrompt = jest.spyOn(window, "prompt");
      spyPrompt.mockReturnValueOnce("Paragraph").mockReturnValueOnce("");
      render(<App isLokiTest={false} sleepMs={0} />);
      await sleep(50);
      expect(screen.getAllByText(textP).length).toBe(3);
    });
  });
  it("test Title components", async () => {
    await act(async () => {
      const spyPrompt = jest.spyOn(window, "prompt");
      spyPrompt.mockReturnValueOnce("Title").mockReturnValueOnce("");
      render(<App isLokiTest={false} sleepMs={0} />);
      await sleep(50);
      expect(screen.getByText("Click on me")).toBeInTheDocument();
    });
  });
  it("test DefultPage components", async () => {
    await act(async () => {
      const spyPrompt = jest.spyOn(window, "prompt");
      spyPrompt.mockReturnValueOnce("");
      const { container, getByText } = render(
        <App isLokiTest={false} sleepMs={0} />
      );
      await sleep(50);
      expect(screen.getAllByText(textP).length).toBe(3);
      expect(getByText("Click on me")).toBeInTheDocument();
      expect(getByText("Some text in h1 element")).toBeInTheDocument();
      expect(getByText('Выберите тег "h"')).toBeInTheDocument();
      expect(getByText("h1")).toBeInTheDocument();

      const classImage = container.querySelector(".image");
      expect(classImage).toBeInTheDocument();
      const classHr = container.querySelector(".hr");
      expect(classHr).toBeInTheDocument();
    });
  });
  it("test Image components", async () => {
    await act(async () => {
      const spyPrompt = jest.spyOn(window, "prompt");
      spyPrompt
        .mockReturnValueOnce("Image")
        .mockReturnValueOnce("left")
        .mockReturnValueOnce("");
      const { container } = render(<App isLokiTest={false} sleepMs={0} />);
      await sleep(50);
      const classImage = container.querySelector(".image");
      expect(classImage).toBeInTheDocument();
      if (classImage) {
        expect((classImage as HTMLElement).style.float).toBe("left");
      }
    });
  });
  it("test HSelector components", async () => {
    await act(async () => {
      const spyPrompt = jest.spyOn(window, "prompt");
      spyPrompt
        .mockReturnValueOnce("HSelector")
        .mockReturnValueOnce("h3")
        .mockReturnValueOnce("");
      render(<App isLokiTest={false} sleepMs={0} />);
      await sleep(50);
      expect(screen.getByText("Some text in h3 element")).toBeInTheDocument();
      expect(screen.getByText('Выберите тег "h"')).toBeInTheDocument();
      expect(screen.getByText("h3")).toBeInTheDocument();
    });
  });
});
