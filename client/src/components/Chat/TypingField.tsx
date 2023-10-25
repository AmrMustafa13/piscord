import { FC } from "react";
import { AiFillGift, AiFillPlusCircle } from "react-icons/ai";
import { HiMiniGif } from "react-icons/hi2";
import { LuSticker } from "react-icons/lu";
import { BsFillEmojiSmileFill } from "react-icons/bs";

interface Props {
  channelTitle: string;
}
const TypingField: FC<Props> = ({ channelTitle }) => {
  return (
    <div className="h-[68px] flex-shrink-0 px-4">
      <div className="bg-[#383a40] p-[11px] flex items-center gap-3 rounded-lg">
        <AiFillPlusCircle className="typing-icon" />
        <input
          className="border-none outline-none flex-1 bg-transparent"
          placeholder={`Message #${channelTitle}`}
        />
        <AiFillGift className="typing-icon" />
        <HiMiniGif className="typing-icon" />
        <LuSticker className="typing-icon" />
        <BsFillEmojiSmileFill className="typing-icon" />
      </div>
    </div>
  );
};

export default TypingField;
