import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Breadcrumb from "./BreadCrumb";

describe("Breadcrumb", () => {
  it("should be accessible with no AXE violations", async () => {
    const items = ["Home", "Category", "Subcategory"];
    const { container } = render(<Breadcrumb items={items} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders the breadcrumb items correctly", () => {
    const items = ["Home", "Books", "Fiction"];
    render(<Breadcrumb items={items} />);

    // Check that all breadcrumb items are rendered
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    const lastItem = screen.getByText(items[items.length - 1]);
    expect(lastItem).toHaveClass("breadcrumb-item active");
  });
});
