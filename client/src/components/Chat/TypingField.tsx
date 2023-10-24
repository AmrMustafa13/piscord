import React, { FC } from "react";

interface Props {
  channelTitle: string;
}
const TypingField: FC<Props> = ({ channelTitle }) => {
  return (
    <div className="h-[68px] flex-shrink-0 px-4">
      <div className="bg-[#383a40] p-[11px] flex rounded-lg">
        <input
          className="border-none outline-none flex-1 bg-transparent"
          placeholder={`Message #${channelTitle}`}
        />
      </div>
    </div>
  );
};

export default TypingField;
