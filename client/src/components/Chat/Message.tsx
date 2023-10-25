import { FC } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsFillReplyFill } from "react-icons/bs";
import { MdAddReaction } from "react-icons/md";

const Message: FC<IMessage> = ({ user, content, timestamp }) => {
  return (
    <div className="flex gap-5 p-1 px-6  mt-[17px] hover:bg-[#2e3035] relative [&:hover>ul]:flex">
      <div
        className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${user.profileImage})`,
        }}
      />

      <div>
        <div className="flex gap-3">
          <p className="font-medium text-base">{user.displayName}</p>
          <p className="font-medium text-base text-[#949ba4]">
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "short",
              timeStyle: "short",
            }).format(timestamp)}
          </p>
        </div>
        <p>{content}</p>
      </div>
      <ul className="absolute right-4 top-[-8px] hidden none bg-[#313338] rounded-md border border-solid border-[#2a2b30] overflow-hidden">
        <li className="w-9 h-9 p-2 hover:bg-[#43444b]">
          <MdAddReaction className="w-full h-full" />
        </li>
        <li className="w-9 h-9 p-2 hover:bg-[#43444b]">
          <BsFillReplyFill className="w-full h-full" />
        </li>
        <li className="w-9 h-9 p-2 hover:bg-[#43444b]">
          <BiDotsHorizontalRounded className="w-full h-full" />
        </li>
      </ul>
    </div>
  );
};

export default Message;
