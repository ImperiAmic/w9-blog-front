export interface PostsInfo {
  posts: Post[];
  postsTotal: number;
}

export interface Post {
  id: string;
  publishDate: Date;
  author: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  content: string;
}

export type PostFormData = Omit<Post, "id">;
