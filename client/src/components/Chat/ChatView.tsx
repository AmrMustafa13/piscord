import { channel } from "./mocked-data";
import Message from "./Message";
import { useEffect, useRef } from "react";
import { BiHash } from "react-icons/bi";

const ChatView = () => {
  const lastMessageRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView();
  }, []);
  return (
    <section className="flex-1 overflow-auto pb-6 scrollbar scrollbar-w-[6px] scrollbar-track-secondary scrollbar-thumb-accent scrollbar-thumb-rounded">
      <div>
        <div className="m-4">
          <div className="grid place-content-center bg-[#41434a] w-[68px] h-[68px] rounded-full">
            <BiHash className="text-white text-[47px] " />
          </div>

          <h2 className="my-2 font-extrabold text-[32px]">
            Welcome to {channel.title}!
          </h2>
          <p className="text-base text-[#b5bac1] font-normal">
            this is the start of the {channel.title} channel.
          </p>
        </div>
      </div>
      <div>
        {channel.chatList.map((chatMessage, index) => (
          <Message
            key={index}
            user={chatMessage.user}
            timestamp={chatMessage.timestamp}
            content={chatMessage.content}
          />
        ))}
        <span ref={lastMessageRef} />
      </div>
    </section>
  );
};

export default ChatView;
