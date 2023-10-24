import { FC } from "react";

const Message: FC<IMessage> = ({ user, content, timestamp }) => {
  return (
    <div className="flex gap-5 px-6 mt-[17px]">
      <div
        className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-cover  bg-center"
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
    </div>
  );
};

export default Message;
