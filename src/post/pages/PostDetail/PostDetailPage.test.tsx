import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PostsContextProvider from "../../context/PostsContextProvider";
import AppRouter from "../../../router/AppRouter";

describe("Given the PostDetail component", () => {
  describe("When it receives the postId '789ghi789ghi789ghi789ghi' from 'Rice Cooker Vegetable Curry' post", () => {
    test("Then it should swosh 'Lekué veggies with a splash of soy' inside a heading", async () => {
      const expectedTitle = /lekué veggies with a splash of soy/i;

      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/post/12345678901234567890abcd"]}>
            <AppRouter />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      screen.debug();

      const postTitle = await screen.findByRole("heading", {
        name: expectedTitle,
      });

      expect(postTitle).toBeInTheDocument();
    });
  });
});
