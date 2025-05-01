import { render, screen } from "@testing-library/react";
import Paginator from "./Paginator";
import AllContextsProvider from "../../test-utils/AllContextsProvider";

describe("Given the Paginator component", () => {
  describe("When the user is on page 2 with a total of 15 posts", () => {
    test("Then it should show a 'Previous page' link and a 'Next page' link", () => {
      const previousPageLinkText = /previous page/i;
      const nextPageLinkText = /next page/i;

      render(<Paginator pageNumber={1} postsTotal={5} />, {
        wrapper: AllContextsProvider,
      });

      const previousPageLink = screen.getByRole("link", {
        name: previousPageLinkText,
      });
      const nextPageLink = screen.getByRole("link", {
        name: nextPageLinkText,
      });

      expect(previousPageLink).toBeInTheDocument();
      expect(nextPageLink).toBeInTheDocument();
    });
  });
});
