import React from "react";
import { render, screen } from "@testing-library/react";
import { AboutPage } from "./AboutPage";
import "@testing-library/jest-dom";

describe("AboutPage", () => {
  // it("test quantity of hr at DOM", () => {
  //   const { container } = render(<AboutPage />);
  // const classAllHr = container.querySelectorAll(".hr");
  // expect(classAllHr.length).toBe(3);
  // });

  it("test DefultPage components", () => {
    render(<AboutPage />);

    expect(screen.getByText("Click on me")).toBeInTheDocument();
    expect(screen.getByText("Some text in h1 element")).toBeInTheDocument();
    expect(screen.getByText('Выберите тег "h"')).toBeInTheDocument();
    expect(screen.getByText("h1")).toBeInTheDocument();
    expect(screen.getAllByText(textP).length).toBe(3);

    const { container } = render(<DefultPage />);
    const classImage = container.querySelector(".image");
    expect(classImage).toBeInTheDocument();
  });
});
