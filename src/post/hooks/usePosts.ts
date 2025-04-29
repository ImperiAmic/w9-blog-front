import { useCallback, useMemo, useState } from "react";
import { PostsContextStructure } from "../context/types";
import { PostFormData, PostsInfo } from "../types";
import PostClient from "../client/PostClient";

const usePosts = (): PostsContextStructure => {
  const [postsInfo, setPostsInfo] = useState<PostsInfo>({
    posts: [],
    postsTotal: 0,
  });

  const postClient = useMemo(() => new PostClient(), []);

  const loadPostsInfo = useCallback(
    async (pageNumber?: number): Promise<void> => {
      const apiPostsInfo = await postClient.getPostsInfo(pageNumber);

      setPostsInfo(apiPostsInfo);
    },
    [postClient],
  );

  const createPost = async (postFormData: PostFormData): Promise<void> => {
    const newPost = await postClient.addPost(postFormData);

    setPostsInfo(({ posts, postsTotal }) => ({
      posts: [...posts, newPost],
      postsTotal,
    }));
  };

  return { ...postsInfo, loadPostsInfo, createPost };
};

export default usePosts;
