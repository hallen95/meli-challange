import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetailPage from "./ProductDetailPage";
import useFetchProducts from "../../hooks/useFetchProduct";

// Mock the custom hook and any necessary parts of react-router-dom
jest.mock("../../hooks/useFetchProduct", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "123" }),
}));

it("should display loading state initially", () => {
  useFetchProducts.mockReturnValue({
    data: null,
    loading: true,
    error: null,
  });

  render(
    <Router>
      <ProductDetailPage />
    </Router>
  );
  expect(screen.getByTestId("skeleton-loader")).toBeInTheDocument();
});

it("should display an error message when there is an error fetching the product", () => {
  useFetchProducts.mockReturnValue({
    data: null,
    loading: false,
    error: "Error loading the product.",
  });

  render(
    <Router>
      <ProductDetailPage />
    </Router>
  );
  expect(screen.getByText("Error loading the product.")).toBeInTheDocument();
});

it("should display the product details when data is fetched successfully", () => {
  useFetchProducts.mockReturnValue({
    data: {
      id: 123,
      title: "Test Product",
      categories: ["Electronics", "Gadgets"],
      price: { amount: 999, currency: "USD" },
      picture: "http://example.com/image.jpg",
      description: "A detailed description here.",
    },
    loading: false,
    error: null,
  });

  render(
    <Router>
      <ProductDetailPage />
    </Router>
  );

  expect(screen.getByText("Test Product")).toBeInTheDocument();
  expect(screen.getByText("Electronics")).toBeInTheDocument();
  expect(screen.getByText("Gadgets")).toBeInTheDocument();
  expect(screen.getByText(/A detailed description here./)).toBeInTheDocument();
});
