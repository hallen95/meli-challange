/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SearchProduct from "./SearchProduct";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));
jest.mock("../../utils", () => ({
  formatPrice: jest
    .fn()
    .mockImplementation((price) => `Formatted: $${price.amount}`),
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

it("renders product cards correctly", () => {
  const products = [
    {
      id: 1,
      picture: "http://example.com/image1.jpg",
      title: "Product 1",
      price: { amount: 100 },
      free_shipping: true,
      location: "Some Location",
    },
    {
      id: 2,
      picture: "http://example.com/image2.jpg",
      title: "Product 2",
      price: { amount: 200 },
      free_shipping: false,
      location: "Another Location",
    },
  ];

  render(
    <Router>
      <SearchProduct products={products} />
    </Router>
  );

  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.getByText("Product 2")).toBeInTheDocument();
  expect(screen.getAllByRole("article").length).toBe(2);
});

it("navigates to the product detail page on product card click", () => {
  const products = [
    {
      id: 1,
      picture: "http://example.com/image.jpg",
      title: "Product 1",
      price: { amount: 100 },
      free_shipping: true,
      location: "Some Location",
    },
  ];

  render(
    <Router>
      <SearchProduct products={products} />
    </Router>
  );

  const productCard = screen.getByText("Product 1").closest("article");
  fireEvent.click(productCard);

  expect(mockNavigate).toHaveBeenCalledWith("/items/1");
});

it("navigates via keyboard interaction", () => {
  const products = [
    {
      id: 1,
      picture: "http://example.com/image.jpg",
      title: "Product 1",
      price: { amount: 100 },
      location: "Some Location",
    },
  ];
  const navigate = require("react-router-dom").useNavigate();
  navigate.mockImplementation(() => jest.fn());

  render(
    <Router>
      <SearchProduct products={products} />
    </Router>
  );

  const productCard = screen.getByText("Product 1").closest("article");
  fireEvent.keyDown(productCard, { key: "Enter" });

  expect(navigate).toHaveBeenCalledWith("/items/1");
});
