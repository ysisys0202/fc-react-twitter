import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import path from "constants/path";

export const Router = () => {
  return (
    <Routes>
      <Route path={path.home} element={<h1>home page</h1>} />
      <Route path={path.post} element={<h1>post list page</h1>} />
      <Route path={`${path.post}/:id`} element={<h1>post detail page</h1>} />
      <Route path={path.postNew} element={<h1>post new page</h1>} />
      <Route path={path.postEdit} element={<h1>post edit page</h1>} />
      <Route path={path.profile} element={<h1>profile page</h1>} />
      <Route path={path.profileEdit} element={<h1>progile edit page</h1>} />
      <Route path={path.notifications} element={<h1>notifications page</h1>} />
      <Route path={path.search} element={<h1>search page</h1>} />
      <Route path={path.login} element={<h1>login page</h1>} />
      <Route path={path.signup} element={<h1>signup page</h1>} />
      <Route path="*" element={<Navigate replace to={path.home} />} />
    </Routes>
  );
};
