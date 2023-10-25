import ServersSidebar from "../../components/ServersSidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return <div className="flex bg-primary text-tx-primary">
    <ServersSidebar />
    <Outlet />
  </div>;
};

export default Home;
