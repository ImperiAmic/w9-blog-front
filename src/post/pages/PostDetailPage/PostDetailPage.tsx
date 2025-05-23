import { useParams } from "react-router";
import usePostsProvider from "../../hooks/usePostsProvider";
import { useEffect, useState } from "react";
import { Post } from "../../types";
import "./PostDetailPage.css";

const PostDetailPage: React.FC = () => {
  const { loadPost } = usePostsProvider();

  const { postId } = useParams<{ postId: string }>();

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const getPost = async () => {
      const post = await loadPost(postId!);
      setPost(post);
    };

    getPost();
  }, [loadPost, postId]);

  if (!post) {
    return (
      <div className="post-detail post-detail__title">
        <span>Oops! Your post has been lost...</span>
        <span>Or eaten! 😋</span>
      </div>
    );
  }

  return (
    <div className="post-detail">
      <header className="post-detail__header">
        <h2 className="post-detail__title">{post.title}</h2>
        <div className="post-detail__details">
          <span>by {post.author}</span>
          <span>on {post.publishDate.toDateString()}</span>
        </div>
      </header>
      <main className="post-detail__main">
        <img
          className="post-detail__image"
          src={post.imageUrl}
          alt={post.imageAlt}
        />
        <p>{post.content}</p>
        <ul className="post-detail__tags">
          {post.tags.map((tag) => (
            <li key={tag}>
              <span className="post-datail__tag">#{tag}</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default PostDetailPage;
