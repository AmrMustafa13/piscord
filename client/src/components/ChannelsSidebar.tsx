import { Outlet, useParams } from "react-router-dom";

const ChannelsSidebar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { serverId } = useParams();

  return (
    <div className="flex-1">
      <Outlet />
    </div>
  );
};

export default ChannelsSidebar;
