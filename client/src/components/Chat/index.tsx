import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import ChatView from "./ChatView";
import TypingField from "./TypingField";
import { channel } from "./mocked-data";

const Chat = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { channelId } = useParams();

  return (
    <div className="flex flex-col max-h-screen">
      <Navbar />
      <ChatView />
      <TypingField channelTitle={channel.title} />
    </div>
  );
};

export default Chat;
