import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Layout from "./Layout";
import PostsContextProvider from "../../post/context/PostsContextProvider";
import AppRouter from "../../router/AppRouter";
import userEvent from "@testing-library/user-event";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Rice Cooking' as heading level 1", () => {
      const expectedAppTitle = /rice cooking/i;

      render(<Layout />, { wrapper: MemoryRouter });

      const appTitle = screen.getByRole("heading", {
        name: expectedAppTitle,
        level: 1,
      });

      expect(appTitle).toBeInTheDocument();
    });
  });

  describe("When it renders in path /posts and the user clicks on button 'Next page'", () => {
    test("Then it should show a 'Pork ribs with green pepper and spring garlic' inside a heading", async () => {
      const expectedLinkText = /next page/i;
      const expectedPostTitle =
        /pork ribs with green pepper and spring garlic/i;

      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/posts"]}>
            <Layout />
            <AppRouter />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const nextPage = screen.getByRole("link", { name: expectedLinkText });

      await userEvent.click(nextPage);

      const postTitle = await screen.findByRole("heading", {
        name: expectedPostTitle,
      });

      expect(postTitle).toBeVisible();
    });
  });

  describe("When it renders in path /posts?pageNumber=2 and the user clicks on button 'Next page'", () => {
    test("Then it should show a 'Microwave Mac and Cheese' inside a heading", async () => {
      const expectedLinkText = /previous page/i;
      const expectedPostTitle = /microwave mac and cheese/i;

      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/posts?pageNumber=2"]}>
            <Layout />
            <AppRouter />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const previousPage = screen.getByRole("link", { name: expectedLinkText });

      await userEvent.click(previousPage);

      const postTitle = await screen.findByRole("heading", {
        name: expectedPostTitle,
      });

      expect(postTitle).toBeVisible();
    });
  });
});
