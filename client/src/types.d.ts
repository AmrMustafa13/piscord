interface IChannel {
  title: string;
  type: "text" | "voice";
  memberList: IMember[];
  chatList: IMessage[];
}

interface IMember {
  user: IUser;
  state: "online" | "offline";
  role: "owner" | "admin" | "none";
}

interface IMessage {
  user: IUser;
  timestamp: Date;
  content: string;
}

interface IUser {
  username: string;
  displayName: string;
  profileImage: string;
}
