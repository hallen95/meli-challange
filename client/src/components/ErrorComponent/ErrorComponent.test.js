import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import ErrorComponent from "./ErrorComponent";

describe("ErrorComponent", () => {
  it("should be accessible with no AXE violations", async () => {
    const { container } = render(
      <ErrorComponent message="Error loading data." />
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders the error message correctly", () => {
    const testMessage = "Error loading data.";
    render(<ErrorComponent message={testMessage} />);

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it("renders default error message when no message is provided", () => {
    const defaultMessage = "An unexpected error has occurred.";
    render(<ErrorComponent />);

    expect(screen.getByText(defaultMessage)).toBeInTheDocument();
  });
});
