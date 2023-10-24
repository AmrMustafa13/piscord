import { channel } from "./mocked-data";
import Message from "./Message";
import textChannelIcon from "@/assets/images/text-channel.svg";

const ChatView = () => {
  return (
    <div className="flex-1 overflow-auto pb-6">
      <div>
        <div className="m-4">
          <div className="grid place-content-center bg-[#41434a] w-[68px] h-[68px] rounded-full ">
            <img src={textChannelIcon} className="w-11 invert" />
          </div>

          <h2 className="my-2 font-extrabold text-[32px]">
            Welcome to {channel.title}!
          </h2>
          <p className="text-base text-[#b5bac1] font-normal">
            this is the start of the {channel.title} channel.
          </p>
        </div>
      </div>
      <div className="">
        {channel.chatList.map((chatMessage, index) => (
          <Message
            key={index}
            user={chatMessage.user}
            timestamp={chatMessage.timestamp}
            content={chatMessage.content}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatView;
