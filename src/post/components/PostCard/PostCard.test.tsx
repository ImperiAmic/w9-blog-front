import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";
import { macAndCheese } from "../../fixtures";
import PostsContextProvider from "../../context/PostsContextProvider";
import { MemoryRouter } from "react-router";

describe("Given the PostCard component", () => {
  describe("When it receives a mac and cheese post", () => {
    test("Then it should show 'Mac and Cheese' inside a heading", () => {
      const expectedTitle = /mac and cheese/i;

      render(
        <PostsContextProvider>
          <MemoryRouter>
            <PostCard post={macAndCheese} />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const postTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(postTitle).toBeInTheDocument();
    });

    test("Then it should show creamy mac and cheese in a bowl", () => {
      const expectedImage = /creamy mac and cheese in a bowl/i;

      render(
        <PostsContextProvider>
          <MemoryRouter>
            <PostCard post={macAndCheese} />
          </MemoryRouter>{" "}
        </PostsContextProvider>,
      );

      const postImage = screen.getByAltText(expectedImage);

      expect(postImage).toBeInTheDocument();
    });

    test("Then it should show the first 100 words of the mac and cheese recipe", () => {
      const wordsLimit = 100;
      const expectedText = macAndCheese.content
        .split(" ")
        .slice(0, wordsLimit)
        .join(" ");

      render(
        <PostsContextProvider>
          <MemoryRouter>
            <PostCard post={macAndCheese} />
          </MemoryRouter>{" "}
        </PostsContextProvider>,
      );

      const postContent = screen.getByRole("paragraph");
      const contentText = postContent.textContent;

      expect(contentText).toBe(expectedText);
    });

    test("Then it should show that have been posted on April 16, 2025", () => {
      render(
        <PostsContextProvider>
          <MemoryRouter>
            <PostCard post={macAndCheese} />
          </MemoryRouter>{" "}
        </PostsContextProvider>,
      );

      const postPublishDate = screen.getByText(/april 3, 2025/i);

      expect(postPublishDate).toBeInTheDocument();
    });

    test("Then it should show a '❌' button", () => {
      render(
        <PostsContextProvider>
          <MemoryRouter>
            <PostCard post={macAndCheese} />
          </MemoryRouter>{" "}
        </PostsContextProvider>,
      );
      screen.debug();
      const postDeleteButton = screen.getByRole("img", {
        name: "Delete post",
      });

      expect(postDeleteButton).toBeInTheDocument();
    });
  });
});
