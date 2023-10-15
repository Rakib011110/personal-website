import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Main from "./Layouts/Main";
import Register from "../Components/Pages/Register/Register";

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
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
