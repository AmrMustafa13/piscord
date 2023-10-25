import { channel } from "./mocked-data";

// Icons
import threadsIcons from "@/assets/images/threads.svg";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidGroup, BiSolidHelpCircle, BiSolidInbox } from "react-icons/bi";
import { AiFillPushpin, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineHashtag } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="h-12 flex justify-between gap-3 p-2 border-b-2 border-solid border-[#26282c]">
      <div className="flex items-center flex-1">
        <HiOutlineHashtag className="mx-2 text-[#80848e] text-[24px]" />
        <h3 className="font-semibold text-base">{channel.title}</h3>
      </div>
      <ul className="flex gap-2">
        <li>
          <img
            src={threadsIcons}
            className="chat-nav-icon invert-[75%] hover:invert-[100%]"
          />
        </li>
        <li>
          <IoMdNotifications className="chat-nav-icon" />
        </li>
        <li>
          <AiFillPushpin className="chat-nav-icon" />
        </li>
        <li>
          <BiSolidGroup className="chat-nav-icon" />
        </li>
      </ul>
      <div className="flex items-center bg-[#1e1f22] px-2">
        <input
          className="bg-transparent w-[100px] border-none outline-none focus:w-[200px] transition-all duration-300 ease-in-out"
          placeholder="Search"
        />
        <AiOutlineSearch className="w-4 h-4 invert-[60%] shrink-0" />
      </div>
      <BiSolidInbox className="chat-nav-icon" />
      <BiSolidHelpCircle className="chat-nav-icon" />
    </header>
  );
};

export default Navbar;
