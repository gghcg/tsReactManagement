import Home from "../pages/comp-a/index";
interface Router {
  path: string;
  [propName: string]: any;
}
const HomeRouter: Router = {
  path: "/home",
  element: <Home></Home>,
};

export default HomeRouter;
