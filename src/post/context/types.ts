import { Post, PostFormData } from "../types";

export interface PostsContextStructure {
  posts: Post[];
  postsTotal: number;
  loadPostsInfo: (pageNumber?: number) => Promise<void>;
  createPost: (postFormData: PostFormData) => Promise<void>;
  removePost: (postId: string) => Promise<void>;
  loadPost: (postId: string) => Promise<Post>;
}
