import PostCard from "components/molecules/PostCard";
import { Post } from "types/Post";
type Props = {
  postList: Post[];
  onDelete: () => void;
  onEdit: () => void;
  onToggleLike: () => void;
  onAddComment: () => void;
};

const PostList = ({
  postList,
  onDelete,
  onAddComment,
  onEdit,
  onToggleLike,
}: Props) => {
  return (
    <ul className="post-list">
      {postList.map((post) => (
        <li key={post.id} className="post-item">
          <PostCard
            post={post}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggleLike={onToggleLike}
            onAddComment={onAddComment}
          />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
