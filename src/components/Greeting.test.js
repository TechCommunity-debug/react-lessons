import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders welcome to our website", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const headingElement = screen.getByText(/hello, welcome to our website!/i);
    const paragraphElement = screen.getByText(/we are glad to have you here./i);

    // Assert
    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
