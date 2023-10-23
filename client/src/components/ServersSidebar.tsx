import { NavLink } from "react-router-dom"
import CreateServerBtn from "./CreateServerBtn"

const serversMockData = [
    {
        id: 1,
        name: 'Server 1',
        img: 'https://via.placeholder.com/150',
        link: '/channels/1'
    },
    {
        id: 2,
        name: 'Server 2',
        img: 'https://via.placeholder.com/150',
        link: '/channels/2'
    },
    {
        id: 3,
        name: 'Server 3',
        img: 'https://via.placeholder.com/150',
        link: '/channels/3'
    }
]


const ServersSidebar = () => {
    return (
        <div className="bg-accent">
            <ul className="flex flex-col gap-2 p-3">
                {serversMockData.map(server => (
                    <li key={server.id}>
                        <NavLink
                            to={server.link}
                        >
                            <img
                                src={server.img}
                                alt={server.name}
                                className="w-12 h-12 rounded-full hover:rounded-2xl transition duration-500"
                            />
                        </NavLink>
                    </li>
                ))}
                <li>
                    <CreateServerBtn />
                </li>
            </ul>
        </div>
    )
}

export default ServersSidebar