import brandName from "@/assets/images/brand-name.svg";
import languageImage from "@/assets/images/language.png";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { MdOutlineExpandMore } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#23272a] text-white py-[80px]">
      <div className=" max-w-[1260px] m-auto px-6">
        <div className="grid grid-cols-6 border-b border-solid border-[#5561e8]">
          <div className="mb-[56px] col-span-6 md:col-span-2  md:row-span-2">
            <div className="flex items-center my-6">
              <img src={languageImage} className="w-[24px] h-[16px] mr-2" />
              English, USA
              <MdOutlineExpandMore />
            </div>
            <ul className="flex gap-6">
              <li>
                <a href="#">
                  <BsTwitter className="text-[22px]" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsInstagram className="text-[22px]" />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillFacebook className="text-[22px]" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsYoutube className="text-[22px]" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTiktok className="text-[22px]" />
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-[56px] col-span-3 md:col-span-2 lg:col-span-1">
            <h5 className="text-[#5561e8] text-base font-normal mb-5">Product</h5>
            <ul>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Download
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Nitro
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Status
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  App Directory
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-[56px] col-span-3 md:col-span-2 lg:col-span-1">
            <h5 className="text-[#5561e8] text-base font-normal mb-5">Company</h5>
            <ul>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Jobs
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Brand
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Newsroom
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Fall Release
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-[56px] col-span-3 md:col-span-2 lg:col-span-1">
            <h5 className="text-[#5561e8] text-base font-normal mb-5">Resources</h5>
            <ul>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  College
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Safety
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Feedback
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Developers
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  StreamKit
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Creators
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Community
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Official 3rd Party Merch
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-[56px] col-span-3 md:col-span-2 lg:col-span-1">
            <h5 className="text-[#5561e8] text-base font-normal mb-5">Policies</h5>
            <ul>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Cookie Settings
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Guidelines
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Acknowledgements
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Licenses
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Company Information
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <img src={brandName} className="invert" />
          <a
            href="#"
            className="bg-[#5865f2] hover:bg-[#7983f5] px-4 py-[7px] rounded-full transition-all ease-in-out duration-200"
          >
            Open Discord
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
