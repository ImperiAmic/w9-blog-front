import { useCallback, useMemo, useState } from "react";
import { PostsContextStructure } from "../context/types";
import { Post, PostFormData, PostsInfo } from "../types";
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
      posts: [newPost, ...posts],
      postsTotal: postsTotal + 1,
    }));
  };

  const removePost = async (postId: string): Promise<void> => {
    const removedPost = await postClient.deletePost(postId);

    setPostsInfo((postsInfo) => ({
      posts: postsInfo.posts.filter((post) => post.id !== removedPost.id),
      postsTotal: postsInfo.postsTotal - 1,
    }));
  };

  const loadPost = async (postId: string): Promise<Post> => {
    const loadedPost = await postClient.getPost(postId);

    return loadedPost;
  };

  return { ...postsInfo, loadPostsInfo, createPost, removePost, loadPost };
};

export default usePosts;
