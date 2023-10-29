import brandName from "@/assets/images/brand-name.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
const NavLinksList = [
  {
    text: "Home",
    url: "#",
  },
  {
    text: "Download",
    url: "#",
  },
  {
    text: "Nitro",
    url: "#",
  },
  {
    text: "Discover",
    url: "#",
  },
  {
    text: "Safety",
    url: "#",
  },
  {
    text: "Support",
    url: "#",
  },
  {
    text: "Blog",
    url: "#",
  },
  {
    text: "Careers",
    url: "#",
  },
];
const Navbar = () => {
  const [openNavDrawer, setOpenNavDrawer] = useState(false);
  return (
    <header>
      <nav className="flex justify-between items-center h-20 md:px-10  px-6 font-gg-sans-bold">
        <img src={brandName} className="invert" />
        <ul className="lg:flex gap-3 hidden ">
          {NavLinksList.map((link) => (
            <li key={link.text}>
              <a
                href={link.url}
                className="p-[10px] m-[10px] text-white font-normal text-base hover:underline"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="bg-white text-[#23272a] px-4 py-[7px] text-[14px] rounded-full hover:shadow-2xl hover:text-[#5865f2]"
          >
            Open Discord
          </a>
          <button
            className="text-white text-[30px] lg:hidden"
            onClick={() => setOpenNavDrawer(true)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
      {/* Drawer */}
      {openNavDrawer && (
        <div className="fixed h-screen w-[min(100vw,330px)] bg-white right-0 top-0 rounded-lg p-6 flex flex-col font-gg-sans-normal">
          <div className="flex justify-between items-center border-b border-solid border-[#ebedef] pb-6">
            <img src={brandName} />
            <button className="text-xl" onClick={() => setOpenNavDrawer(false)}>
              <AiOutlineClose />
            </button>
          </div>
          <ul className="mt-4 flex-1">
            {NavLinksList.map((link) => (
              <li key={link.text}>
                <a
                  href={link.url}
                  className="block px-4 py-2 hover:text-[#0fb4f4] hover:bg-[#f6f6f6]"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="px-4 py-[7px] bg-[#5865f2] font-semibold text-white rounded-full flex items-center gap-2 text-[14px] w-fit"
          >
            <FiDownload className="text-[20px] font-bold" /> <p>Download for Linux</p>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
