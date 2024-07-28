import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { axe } from "jest-axe";
import SearchBox from "./SearchBox";

// Mocking useNavigate
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("SearchBox Accessibility Tests", () => {
  it("renders search input and button with proper attributes for accessibility", async () => {
    const { container } = render(
      <Router>
        <SearchBox />
      </Router>
    );

    const input = screen.getByPlaceholderText("Nunca dejes de buscar...");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAccessibleName(); 

    const button = screen.getByRole("button", { name: "Icono de buscar" });
    expect(button).toBeInTheDocument();

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
