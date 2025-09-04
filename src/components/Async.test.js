import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if requests succeds", async () => {
    // Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValue({
      json: async () =>
        [
          { userId: 1, id: 1, title: "First Post", body: "This is the first post" },
          { userId: 1, id: 2, title: "Second Post", body: "This is the second post" },
        ],
    });
    render(<Async />);

    // Act
    const listItemElements = await screen.findAllByRole("listitem");

    // Assert
    expect(listItemElements).not.toHaveLength(0);
  });
});
