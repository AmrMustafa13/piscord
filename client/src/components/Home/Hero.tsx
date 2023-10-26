import Navbar from "./Navbar";
import { FiDownload } from "react-icons/fi";
import cloudsImage from "@/assets/images/hero-bg-clouds.svg";
import foreGroundLeft from "@/assets/images/hero-fg-left.svg";
import foreGroundRightImage from "@/assets/images/hero-fg-right.svg";
const Hero = () => {
  return (
    <header className="bg-[#404eed] overflow-hidden">
      <div className="m-auto relative h-[630px]">
        <div className="absolute inset-0 z-20 max-w-7xl m-auto">
          <Navbar />
          <div className="w-[716px] m-auto py-[120px]">
            <h1 className="font-abc-ginto-nord text-white font-extrabold text-[56px] text-center">
              Imagine a place...
            </h1>
            <p className="text-white text-[18px] text-center mt-10">
              ...where you can belong to a school club, a gaming group, or a worldwide art
              community. Where just you and a handful of friends can spend time together. A place
              that makes it easy to talk every day and hang out more often.
            </p>

            <div className="flex justify-center mt-6">
              <a className="px-8 py-4 m-6 bg-white text-[#23272a] rounded-full flex items-center gap-2 text-[20px]">
                <FiDownload className="text-[22px] font-bold" /> <p>Download for Linux</p>
              </a>
              <a className="px-8 py-4 m-6 bg-[#23272a] text-white rounded-full text-[20px]">
                Open Discord in your browser
              </a>
            </div>
          </div>
        </div>
        <img src={cloudsImage} className="absolute w-full h-full top-0 object-cover z-10" />
        <img src={foreGroundLeft} className="absolute left-[-80px] bottom-0 z-10" />
        <img src={foreGroundRightImage} className="absolute right-[-30px] bottom-0 z-10" />
      </div>
    </header>
  );
};

export default Hero;
