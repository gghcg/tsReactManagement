import { lazy, Suspense } from "react";

interface Router {
  path: string;
  [propName: string]: any;
}
const Login = lazy(() => import("../pages/comp-d/index"));
const login: Router = {
  path: "/login",
  element: (
    <Suspense fallback={<div>loading...</div>}>
      <Login></Login>
    </Suspense>
  ),
};

export default login;
