import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PostsPage from "../post/pages/PostsPage/PostsPage";
import PostFormPage from "../post/pages/PostFormPage/PostFormPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={"/posts"} />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts?pageNumber=value" element={<PostsPage />} />
        <Route path="add-post" element={<PostFormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
