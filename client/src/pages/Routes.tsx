import { Route, Routes } from "react-router-dom";
import { pages } from "./pagesData";

const Router = () => {
  return (
    <Routes>
      {pages.map(({ name, path, component }) => (
        <Route key={name} path={path} element={component} />
      ))}
    </Routes>
  );
};

export default Router;
