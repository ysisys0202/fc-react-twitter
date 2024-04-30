import { Link } from "react-router-dom";
import path from "constants/path";
import { Post } from "types/Post";
import {
  FaUserCircle as IconUser,
  FaRegComment as IconComment,
} from "react-icons/fa";
import { AiFillHeart as IconHeart } from "react-icons/ai";

type Props = {
  post: Post;
  onDelete: () => void;
  onEdit: () => void;
  onToggleLike: () => void;
  onAddComment: () => void;
};

const PostCard = ({
  post,
  onDelete,
  onAddComment,
  onEdit,
  onToggleLike,
}: Props) => {
  return (
    <article className="post-card">
      <Link to={`${path.post}/${post.id}`}>
        <div className="post-card__profile">
          <div className="post-card__flex">
            {post.profileUrl ? (
              <img
                src={post.profileUrl}
                alt={`${post.email}님의 프로필 이미지`}
                className="post-card__profile-image"
              />
            ) : (
              <IconUser className="post-card__profile-icon" />
            )}
            <span className="post-card__email">{post.email}</span>
            <span className="post-card__created-at">{post.createeAt} </span>
          </div>
          <p className="post-card__content">{post.content}</p>
          <div className="post-card__footer">
            {/* post.uid === user.uid 일 때 */}
            <>
              <button
                type="button"
                className="post-card__footer-button post-card__delete"
                onClick={onDelete}
              >
                삭제
              </button>
              <Link
                to={`${path.postEdit}/${post.id}`}
                className="post-card__footer-button post-card__edit"
                onClick={onEdit}
              >
                수정
              </Link>
            </>
            <button
              type="button"
              className="post-card__footer-button post-card__likes"
              onClick={onToggleLike}
            >
              <IconHeart />
              {post.likeCount || 0}
            </button>
            <button
              className="post-card__footer-button post-card__comments"
              onClick={onAddComment}
            >
              <IconComment />
              {post.comments?.length || 0}
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
