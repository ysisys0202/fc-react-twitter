export type Post = {
  id: string;
  email: string;
  content: string;
  createeAt: string;
  uid: string;
  profileUrl?: string;
  likes?: string[];
  likeCount?: number;
  comments?: Comment[];
};

export type Comment = any;
