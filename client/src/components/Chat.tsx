import { useParams } from "react-router-dom"

const Chat = () => {

    const { channelId } = useParams()

    return (
        <div>Welcome to Chat {channelId}</div>
    )
}

export default Chat