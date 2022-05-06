import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Image } from "./image";

import "@testing-library/jest-dom";

describe("Image", () => {
  it("Image is working with floating='left'", () => {
    const { container } = render(<Image floating="left" />);
    const classImage = container.querySelector(".image");
    expect(classImage).toBeInTheDocument();
    if (classImage) {
      expect((classImage as HTMLElement).style.float).toBe("left");
    }
  });
  it("Image is working with floating='right'", () => {
    const { container } = render(<Image floating="right" />);
    const classImage = container.querySelector(".image");
    if (classImage) {
      userEvent.click(classImage);
      expect(classImage).toBeInTheDocument();
      expect((classImage as HTMLElement).style.float).toBe("left");
      userEvent.click(classImage);
      expect((classImage as HTMLElement).style.float).toBe("right");
    }
  });
});
