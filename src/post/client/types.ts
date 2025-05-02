import { Post, PostFormData, PostsInfo } from "../types";

export interface PostClientStructure {
  getPostsInfo: () => Promise<PostsInfo>;
  addPost: (postFormData: PostFormData) => Promise<Post>;
  deletePost: (postId: string) => Promise<Post>;
}
