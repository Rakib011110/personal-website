import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Main from "./Layouts/Main";
import Register from "../Components/Pages/Register/Register";
import Login from "../Components/Pages/Login/Login";
import BlogPage from "../Components/BlogComponents/BlogComponents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
