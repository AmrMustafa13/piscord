import { useParams } from "react-router-dom";
import TextChannelIcon from "../../assets/images/TextChannel.svg";
import Message from "./Message";
import TypingField from "./TypingField";

const user1: IUser = {
  username: "khaledhegazy222",
  displayName: "Khaled Hegazy",
  profileImage:
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
};
const user2: IUser = {
  username: "amrmostafa13",
  displayName: "Amr Mostafa",
  profileImage:
    "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
};
const channel: IChannel = {
  title: "My Great Channel",
  type: "text",
  memberList: [
    {
      user: user1,
      role: "owner",
      state: "online",
    },
    {
      user: user2,
      role: "admin",
      state: "offline",
    },
  ],
  chatList: [
    {
      user: user1,
      content: "Lorem ipsum dolor sit",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content: "Lorem ipsum dolor sit",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt sint nesciunt optio, nobis in",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt sint nesciunt optio, nobis in laudantium aspernatur blanditiis impedit quam maxime aperiam nostrum veritatis deleniti dolor soluta recusandae at quasi.",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user1,
      content: "Lorem ipsum dolor sit",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content: "Lorem ipsum dolor sit",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt sint nesciunt optio, nobis in",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt sint nesciunt optio, nobis in laudantium aspernatur blanditiis impedit quam maxime aperiam nostrum veritatis deleniti dolor soluta recusandae at quasi.",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user1,
      content: "Lorem ipsum dolor sit",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content: "Lorem ipsum dolor sit",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt sint nesciunt optio, nobis in",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt sint nesciunt optio, nobis in laudantium aspernatur blanditiis impedit quam maxime aperiam nostrum veritatis deleniti dolor soluta recusandae at quasi.",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user1,
      content: "Lorem ipsum dolor sit",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content: "Lorem ipsum dolor sit",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt sint nesciunt optio, nobis in",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt sint nesciunt optio, nobis in laudantium aspernatur blanditiis impedit quam maxime aperiam nostrum veritatis deleniti dolor soluta recusandae at quasi.",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user1,
      content: "Lorem ipsum dolor sit",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content: "Lorem ipsum dolor sit",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt sint nesciunt optio, nobis in",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt sint nesciunt optio, nobis in laudantium aspernatur blanditiis impedit quam maxime aperiam nostrum veritatis deleniti dolor soluta recusandae at quasi.",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user1,
      content: "Lorem ipsum dolor sit",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content: "Lorem ipsum dolor sit",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt sint nesciunt optio, nobis in",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing",
      timestamp: new Date(2023, 10, 11),
    },
    {
      user: user2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt sint nesciunt optio, nobis in laudantium aspernatur blanditiis impedit quam maxime aperiam nostrum veritatis deleniti dolor soluta recusandae at quasi.",
      timestamp: new Date(2023, 10, 11),
    },
  ],
};

const Chat = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { channelId } = useParams();

  return (
    <div className="flex flex-col max-h-screen">
      <div className="h-12 flex justify-between p-2 border-b-2 border-solid border-[#26282c] ">
        <div className="flex items-center">
          <img
            src={TextChannelIcon}
            className="mx-2"
            style={{
              filter: "invert(60%)",
            }}
          />
          <h3 className="font-semibold text-base">{channel.title}</h3>
        </div>
        <div>{/*Icons List */}</div>
      </div>
      <div className="flex-1 overflow-auto pb-6">
        <div>
          <div className="m-4">
            <div className="grid place-content-center bg-[#41434a] w-[68px] h-[68px] rounded-full ">
              <img
                src={TextChannelIcon}
                className="w-11"
                style={{ filter: "invert(100%)" }}
              />
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
      <TypingField channelTitle={channel.title} />
    </div>
  );
};

export default Chat;
