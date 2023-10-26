import brandName from "@/assets/images/brand-name.svg";
const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center p-3 ">
        <img src={brandName} className="invert" />
        <ul className="flex  gap-3">
          <li>
            <a href="#" className="p-[10px] m-[10px] text-white font-semibold hover:underline">
              Download
            </a>
          </li>
          <li>
            <a href="#" className="p-[10px] m-[10px] text-white font-semibold hover:underline">
              Nitro
            </a>
          </li>
          <li>
            <a href="#" className="p-[10px] m-[10px] text-white font-semibold hover:underline">
              Discover
            </a>
          </li>
          <li>
            <a href="#" className="p-[10px] m-[10px] text-white font-semibold hover:underline">
              Safety
            </a>
          </li>
          <li>
            <a href="#" className="p-[10px] m-[10px] text-white font-semibold hover:underline">
              Support
            </a>
          </li>
          <li>
            <a href="#" className="p-[10px] m-[10px] text-white font-semibold hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="p-[10px] m-[10px] text-white font-semibold hover:underline">
              Careers
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="bg-white text-[#23272a] px-4 py-[7px] rounded-full hover:shadow-2xl hover:text-[#5865f2]"
        >
          Open Discord
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
