import Navbar from "./Navbar";
import { FiDownload } from "react-icons/fi";
import cloudsImage from "@/assets/images/hero-bg-clouds.svg";
import foreGroundLeft from "@/assets/images/hero-fg-left.svg";
import foreGroundRightImage from "@/assets/images/hero-fg-right.svg";

const Hero = () => {
  return (
    <header className="bg-[#404eed] overflow-hidden">
      <div className="m-auto relative min-h-[630px] md:min-h-[710px] lg:min-h-[630px]">
        <div className="static md:absolute inset-0 z-20 max-w-7xl m-auto">
          <Navbar />
          <div className="max-w-[800px] lg:m-auto py-[56px] md:py-20 lg:py-[120px] px-6 md:px-10 ">
            <h1 className="text-start lg:text-center font-abc-ginto-nord text-white font-extrabold text-[clamp(24px,5vw,44px)] lg:text-[56px] uppercase">
              Imagine a place...
            </h1>
            <p className="text-white text-[clamp(16px,2vw,20px)] text-start lg:text-center mt-10">
              ...where you can belong to a school club, a gaming group, or a worldwide art
              community. Where just you and a handful of friends can spend time together. A place
              that makes it easy to talk every day and hang out more often.
            </p>

            <div className="flex lg:justify-center flex-wrap md:block lg:flex mt-6 gap-6">
              <a className="px-8 py-4 md:my-6 lg:m-0 bg-white text-[#23272a] rounded-full flex w-fit items-center gap-2 flex-shrink-0 text-[20px]">
                <FiDownload className="text-[22px] font-bold" /> <p>Download for Linux</p>
              </a>
              <a className="px-8 py-4 md:my-6 lg:m-0 bg-[#23272a] block w-fit text-white rounded-full text-[20px] flex-shrink-0">
                Open Discord in your browser
              </a>
            </div>
          </div>
        </div>
        <img
          src={cloudsImage}
          className="absolute w-full h-full top-0 object-cover z-10 hidden md:block"
        />
        <img
          src={foreGroundLeft}
          className="md:hidden lg:block lg:absolute left-[50%] bottom-0 z-10 ml-[-80px] lg:ml-[-1030px]"
        />
        <img
          src={foreGroundRightImage}
          className="absolute left-[50%] ml-[-70px] lg:ml-[370px] bottom-0 z-10 hidden md:block"
        />
      </div>
    </header>
  );
};

export default Hero;
