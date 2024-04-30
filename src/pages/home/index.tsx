import { Post } from "types/Post";
import HomeTabMenu from "components/molecules/HomeTabMenu";
import PostForm from "components/molecules/PostForm";
import PostList from "components/organisms/PostList";

const posts: Post[] = [
  {
    id: "1",
    email: "aaa@test.com",
    content: "내용입니다.",
    createeAt: "2024.04.30",
    uid: "1",
  },
  {
    id: "2",
    email: "aaa@test.com",
    content: "내용입니다.",
    createeAt: "2024.04.30",
    uid: "1",
  },
  {
    id: "3",
    email: "aaa@test.com",
    content: "내용입니다.",
    createeAt: "2024.04.30",
    uid: "1",
  },
  {
    id: "4",
    email: "aaa@test.com",
    content: "내용입니다.",
    createeAt: "2024.04.30",
    uid: "1",
  },
  {
    id: "5",
    email: "aaa@test.com",
    content: "내용입니다.",
    createeAt: "2024.04.30",
    uid: "1",
  },
  {
    id: "6",
    email: "aaa@test.com",
    content: "내용입니다.",
    createeAt: "2024.04.30",
    uid: "1",
  },
  {
    id: "7",
    email: "aaa@test.com",
    content: "내용입니다.",
    createeAt: "2024.04.30",
    uid: "1",
  },
  {
    id: "8",
    email: "aaa@test.com",
    content: "내용입니다.",
    createeAt: "2024.04.30",
    uid: "1",
  },
];

const HomePage = () => {
  function handleFileUpload() {}
  function handleDelete() {}
  function handleEdit() {}
  function handleToggleLike() {}
  function handleAddComment() {}
  return (
    <div className="home">
      <h1 className="home__title">HOME</h1>
      <HomeTabMenu />
      <PostForm onImageUpload={handleFileUpload} />
      <PostList
        postList={posts}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onToggleLike={handleToggleLike}
        onAddComment={handleAddComment}
      />
    </div>
  );
};

export default HomePage;
