import { FiImage as IconImage } from "react-icons/fi";

type Props = {
  onImageUpload: () => void;
};
const PostForm = ({ onImageUpload }: Props) => {
  return (
    <form className="post-form">
      <textarea
        className="post-form__textarea"
        name="content"
        id="content"
        required
        placeholder="What is happening?"
      ></textarea>
      <div className="post-form__submit-area">
        <label htmlFor="file-input" className="post-form__file">
          <IconImage className="post-form__file-icon" />
        </label>
        <input
          type="file"
          id="file-input"
          name="file-input"
          accept="image/*"
          onChange={onImageUpload}
          className="visually-hidden"
        />
        <button type="submit" className="post-form__submit-button">
          Tweet
        </button>
      </div>
    </form>
  );
};

export default PostForm;
