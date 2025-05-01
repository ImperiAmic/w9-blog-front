import { useEffect } from "react";
import usePosts from "../../hooks/usePosts";
import PostsList from "../../components/PostsList/PostsList";
import "./PostsPage.css";
import Paginator from "../../../components/Paginator/Paginator";
import { useSearchParams } from "react-router";

const PostsPage: React.FC = () => {
  const { posts, postsTotal, loadPostsInfo } = usePosts();
  const [pageNumber] = useSearchParams();

  const page = pageNumber.get("pageNumber")
    ? Number(pageNumber.get("pageNumber"))
    : 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    loadPostsInfo(page);
  }, [loadPostsInfo, page]);

  return (
    <>
      <h2 className="page-title">All our recipies</h2>
      <span className="posts-info">
        {posts.length} out of {postsTotal} recipies
      </span>
      <PostsList posts={posts} />
      <Paginator pageNumber={page} postsTotal={postsTotal} />
    </>
  );
};

export default PostsPage;
