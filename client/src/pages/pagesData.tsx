import Home from "./Home";

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
];
