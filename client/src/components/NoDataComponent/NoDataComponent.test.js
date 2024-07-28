import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import NoDataComponent from "./NoDataComponent";

describe("NoDataComponent", () => {
  it("renders correctly with default message", () => {
    render(<NoDataComponent />);
    expect(screen.getByText("No data available.")).toBeInTheDocument();
  });

  it("renders correctly with custom message", () => {
    const customMessage = "Custom message for empty data";
    render(<NoDataComponent message={customMessage} />);
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<NoDataComponent />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
