import { useNavigate } from "react-router";
import Button from "../../../components/Button/Button";
import usePostsProvider from "../../hooks/usePostsProvider";
import { Post } from "../../types";
import "./PostCard.css";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({
  post: { id, title, publishDate, author, imageUrl, imageAlt, content, tags },
}) => {
  const { removePost } = usePostsProvider();
  const navigate = useNavigate();

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(publishDate);

  const wordsLimit = 100;
  const contentPreview = content.split(" ").slice(0, wordsLimit).join(" ");

  return (
    <article className="post">
      <Button
        type="button"
        action={() => navigate(`/post/${id}`)}
        modifier={"info"}
        ariaLabel={"Go to post detail"}
        ariaRole="img"
      >
        ℹ️
      </Button>
      <img className="post__image" src={imageUrl} alt={imageAlt} />
      <div>
        <h3 className="post__title">{title}</h3>
        <span>
          {formattedDate} by {author}
        </span>
        <p className="post__content post__content--preview">{contentPreview}</p>
        <ul className="post__tags-list">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="post__tag">#{tag}</span>
            </li>
          ))}
        </ul>
        <Button
          type="button"
          action={() => removePost(id)}
          modifier={"delete"}
          ariaLabel={"Delete post"}
          ariaRole="img"
        >
          ❌
        </Button>
      </div>
    </article>
  );
};

export default PostCard;
