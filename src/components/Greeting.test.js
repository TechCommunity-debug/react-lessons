import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("renders 'Changed!' text when button is clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.getByText("Changed!");

    // Assert
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'We are glad to have you here.' text when button is clicked", () => {
    // Arrange
    render(<Greeting />);

    // ACT
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.queryByText("We are glad to have you here.");

    // Assert
    expect(outputElement).toBeNull();
  });
});
