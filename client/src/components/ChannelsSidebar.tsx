import { Outlet, useParams } from "react-router-dom"

const ChannelsSidebar = () => {

    const { serverId } = useParams()

    return (
        <div>
            Channels of server {serverId}
            <Outlet />
        </div>
    )
}

export default ChannelsSidebar