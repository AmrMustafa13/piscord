import ServersSidebar from "../../components/ServersSidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return <div className="flex justify-between bg-primary min-h-screen text-tx-primary">
    <ServersSidebar />
    <Outlet />
  </div>;
};

export default Home;
