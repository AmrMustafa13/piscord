import Home from "./Home";
import Register from "./Register";

interface IPage {
  name: string;
  path: string;
  component: JSX.Element;
}
export const pages: IPage[] = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Register",
    path: "/register",
    component: <Register />,
  },
];
