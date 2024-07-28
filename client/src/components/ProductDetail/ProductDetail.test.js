import React from "react";
import { render, screen } from "@testing-library/react";
import ProductDetail from "./ProductDetail";

const mockProduct = {
  picture: "http://example.com/image.jpg",
  title: "Test Product",
  condition: "New",
  price: {
    currency: "USD",
    amount: 1000,
    decimals: 0,
  },
  description: "A detailed description of the test product.",
};

describe("ProductDetail", () => {
  it("renders correctly with given product data", () => {
    render(<ProductDetail product={mockProduct} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", mockProduct.picture);
    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      `View of ${mockProduct.title}`
    );
    expect(screen.getByTestId("product-price")).toBeInTheDocument();
    expect(screen.getByText(mockProduct.condition)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: mockProduct.title })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Buy product" })
    ).toBeInTheDocument();
    expect(screen.getByText("Descripción del producto")).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });
});
