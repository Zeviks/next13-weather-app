import { BiSun } from "react-icons/Bi";

const Navbar = () => {
  return (
    <div className="container my-4 ml-4 fixed top-0 w-fit z-10 ">
      <a href="/#">
        <span className="text-xl font-bold flex items-center">
          <BiSun className="mr-2" /> {/* Add margin to the icon */}
          <span className="font-[Syne]">Weather</span>
        </span>
      </a>
    </div>
  );
};

export default Navbar;
