import { lazy } from "react";

interface Router {
  path: string;
  [propName: string]: any;
}
const login: Router = {
  path: "/login",
  element: <div>1111</div>,
};

export default login;
