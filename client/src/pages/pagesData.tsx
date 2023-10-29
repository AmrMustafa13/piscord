import Main from "./Main";
import Login from "./Login";
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
    component: <Main />,
  },
  {
    name: "Register",
    path: "/register",
    component: <Register />,
  },
  {
    name: "Login",
    path: "/login",
    component: <Login />,
  },
];
