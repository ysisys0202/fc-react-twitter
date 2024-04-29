import { Navigate, Route, Routes } from "react-router-dom";
import path from "constants/path";
import HomePage from "pages/home";
import PostListPage from "pages/post";
import PostDetailPage from "pages/post/detail";
import PostNewPage from "pages/post/new";
import PostEditPage from "pages/post/edit";
import ProfilePage from "pages/profile";
import ProfileEditPage from "pages/profile/edit";
import LoginPage from "pages/user/login";
import SignupPage from "pages/user/signup";
import SearchPage from "pages/search";
import NotificationsPage from "pages/notifications";

export const Router = () => {
  return (
    <Routes>
      <Route path={path.home} element={<HomePage />} />
      <Route path={path.post} element={<PostListPage />} />
      <Route path={`${path.post}/:id`} element={<PostDetailPage />} />
      <Route path={path.postNew} element={<PostNewPage />} />
      <Route path={path.postEdit} element={<PostEditPage />} />
      <Route path={path.profile} element={<ProfilePage />} />
      <Route path={path.profileEdit} element={<ProfileEditPage />} />
      <Route path={path.notifications} element={<NotificationsPage />} />
      <Route path={path.search} element={<SearchPage />} />
      <Route path={path.login} element={<LoginPage />} />
      <Route path={path.signup} element={<SignupPage />} />
      <Route path="*" element={<Navigate replace to={path.home} />} />
    </Routes>
  );
};
