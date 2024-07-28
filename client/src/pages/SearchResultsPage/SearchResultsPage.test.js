import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SearchResultsPage from "./SearchResultsPage";
import useFetchProducts from "../../hooks/useFetchProduct";

jest.mock("../../hooks/useFetchProduct", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    search: "?q=test",
  }),
}));

describe("SearchResultsPage", () => {
  it("should display loading state initially", () => {
    useFetchProducts.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(
      <Router>
        <SearchResultsPage />
      </Router>
    );
    expect(screen.getByTestId("skeleton-loader")).toBeInTheDocument(); // Ensure your SkeletonLoader has a 'data-testid="skeleton-loader"'
  });

  it("should handle and display errors correctly", () => {
    useFetchProducts.mockReturnValue({
      data: null,
      loading: false,
      error: new Error("Error fetching products"),
    });

    render(
      <Router>
        <SearchResultsPage />
      </Router>
    );
    expect(screen.getByText(/Error fetching products/)).toBeInTheDocument(); // Assuming ErrorComponent shows the error message
  });

  it("should display no data message when no products are found", () => {
    useFetchProducts.mockReturnValue({
      data: { items: [] },
      loading: false,
      error: null,
    });

    render(
      <Router>
        <SearchResultsPage />
      </Router>
    );
    expect(screen.getByText(/No products found./)).toBeInTheDocument();
  });

  it("should display products when data is fetched successfully", () => {
    useFetchProducts.mockReturnValue({
      data: {
        items: [
          {
            id: 1,
            title: "Test Product",
            picture: "http://example.com/image.jpg",
            price: { amount: 1000, currency: "USD", decimals: 0 },
            free_shipping: true,
            location: "Some location",
          },
        ],
        categories: [],
      },
      loading: false,
      error: null,
    });

    render(
      <Router>
        <SearchResultsPage />
      </Router>
    );
    expect(screen.getByText(/Test Product/)).toBeInTheDocument();
  });
});
