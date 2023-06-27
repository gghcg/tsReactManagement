import { lazy, Suspense } from "react";
const User = lazy(() => import("../pages/comp-c/index"));
const UserInfo = lazy(() => import("../pages/comp-c/children/index"));
// 报错
// A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
// 懒加载必须嵌套在Suspense里面，用一个不是懒加载的组件包裹

interface Router {
  path: string;
  [propName: string]: any;
}

const UserRouter: Router = {
  path: "/user",
  element: (
    <Suspense fallback={<div>loading...</div>}>
      <User></User>
    </Suspense>
  ),
  children: [
    {
      path: "/user/info",
      element: (
        <Suspense fallback={<div>loading...</div>}>
          <UserInfo></UserInfo>
        </Suspense>
      ),
    },
  ],
};

export default UserRouter;
