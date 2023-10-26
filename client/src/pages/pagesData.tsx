import Servers from "./Servers";

interface IPage {
  name: string;
  path: string;
  component: JSX.Element;
}
export const pages: IPage[] = [
  {
    name: "Home",
    path: "/",
    component: <Servers />,
  },
];
