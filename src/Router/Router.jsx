import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Main from "./Layouts/Main";
import Register from "../Components/Pages/Register/Register";
import Login from "../Components/Pages/Login/Login";

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
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
