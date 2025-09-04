import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if requests succeds", async () => {
    // Arrange
    render(<Async />);

    // Act
    const listItemElements = await screen.findAllByRole("listitem");

    // Assert
    expect(listItemElements).not.toHaveLength(0);
  });
});
