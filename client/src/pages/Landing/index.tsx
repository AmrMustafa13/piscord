import Hero from "@/components/Landing/Hero";
import downloadBackground from "@/assets/images/download-bg.svg";
import { FiDownload } from "react-icons/fi";
import Services from "@/components/Landing/Services";
import Footer from "@/components/Landing/Footer";

const Landing = () => {
  return (
    <>
      <Hero />
      <Services />
      <div className="flex flex-col items-center gap-10 relative mb-[120px] px-6">
        <img src={downloadBackground} className="absolute top-0" />
        <h3 className="text-[32px] font-bold mt-[30px]">Ready to start your journey?</h3>
        <a className="self-start md:self-auto flex gap-3 items-center text-white bg-[#5865f2] rounded-full px-8 py-4 font-medium text-xl">
          <FiDownload className="text-[22px] font-bold" />
          Download for Linux
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
