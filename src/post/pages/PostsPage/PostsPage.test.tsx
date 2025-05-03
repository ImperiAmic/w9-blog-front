import { render, screen } from "@testing-library/react";
import PostsPage from "./PostsPage";
import { MemoryRouter } from "react-router";
import PostsContextProvider from "../../context/PostsContextProvider";

describe("Given the PostsPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'All our recipies' in a heading", () => {
      const expectedHeadingText = /all our recipies/i;

      render(
        <PostsContextProvider>
          <PostsPage />
        </PostsContextProvider>,
        { wrapper: MemoryRouter },
      );

      const postsPageTitle = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(postsPageTitle).toBeInTheDocument();
    });
  });
});
