export default interface Post {
    title: string;
    text: string;
    timestamp: number;
    author: number;
    likes: number[];
    imageUrl?: string;
    postId: number;
  }