import { Link } from "react-router";
import "./Paginator.css";

interface PaginatorProps {
  pageNumber: number;
  postsTotal: number;
}

const Paginator: React.FC<PaginatorProps> = ({ pageNumber, postsTotal }) => {
  const pagesTotal = Math.ceil(postsTotal / 5);
  const previousPage = pageNumber - 1;
  const nextPage = pageNumber + 1;

  const isFirstPage = pageNumber > 1 ? "" : "paginator--hidden";
  const isLastPage = pageNumber < pagesTotal ? "" : "paginator--hidden";

  return (
    <div className="paginator">
      <Link
        className={isFirstPage}
        to={`/posts?pageNumber=${previousPage}`}
        aria-label="Previous page"
      >
        {"<"}
      </Link>

      <span className="page-indicator">{pageNumber}</span>

      <Link
        className={isLastPage}
        to={`/posts?pageNumber=${nextPage}`}
        aria-label="Next page"
      >
        {">"}
      </Link>
    </div>
  );
};

export default Paginator;
