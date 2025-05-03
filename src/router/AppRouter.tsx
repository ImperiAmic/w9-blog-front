import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PostsPage from "../post/pages/PostsPage/PostsPage";
import PostFormPage from "../post/pages/PostFormPage/PostFormPage";
import PostDetail from "../post/pages/PostDetail/PostDetail";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={"/posts"} />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="add-post" element={<PostFormPage />} />
        <Route path="post/:postId" element={<PostDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
