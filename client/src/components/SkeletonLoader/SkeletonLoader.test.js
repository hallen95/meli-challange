import React from "react";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import SkeletonLoader from "./Skeletonloader";

expect.extend(toHaveNoViolations);

describe("SkeletonLoader", () => {
  it("renders skeleton loader components", () => {
    render(<SkeletonLoader />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-loader")).toHaveAttribute(
      "aria-label",
      "Content is loading"
    );
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<SkeletonLoader />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
