import { createBrowserRouter, Navigate } from "react-router-dom";
// routes
import login from "./login";
import HomeRouter from "./home";
import aboutRouter from "./about";
import UserRouter from "./user";
//component
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true, // <-- match on parent, i.e. "/"
        element: <Navigate to="/login" replace />, // <-- redirect
      },
      HomeRouter,
      aboutRouter,
      UserRouter,
    ],
  },
  login,
  {
    path: "*",
    element: <Navigate to="/login"></Navigate>,
  },
]);

export default router;
