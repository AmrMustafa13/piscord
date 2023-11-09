import Protected from "@/components/Protected";
import ServersSidebar from "@/components/ServersSidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Protected>
      <div className="flex bg-primary text-tx-primary">
        <ServersSidebar />
        <Outlet />
      </div>
    </Protected>
  );
};

export default Main;
