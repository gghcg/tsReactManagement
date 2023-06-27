import About from "../pages/comp-b/index";
interface Router {
  path: string;
  [propName: string]: any;
}
const aboutRouter: Router = {
  path: "/about",
  element: <About></About>,
};

export default aboutRouter;
