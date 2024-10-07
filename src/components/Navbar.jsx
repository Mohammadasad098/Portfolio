import { useState, useEffect, useRef } from 'react';
import { LuUser2 } from 'react-icons/lu';
import { TiHomeOutline } from 'react-icons/ti';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { PiNotebookLight } from "react-icons/pi";
import { MdOutlineContactless } from "react-icons/md";
import { RxResume } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  const handleCloseClick = (event) => {
    event.stopPropagation();
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative shadow bg-blue-950 top-0 z-30">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to={''} className="text-6xl font-bold text-[#3189ac]">Asad...</Link>
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 512 512"
                  className="fill-current"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 512 512"
                  className="fill-current"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={navbarRef}
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:text-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center bg-blue-950 ${
            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center md:flex-row md:mx-6 space-y-4 md:space-y-0 md:space-x-4">
            <Link className="relative flex items-center py-2 px-2 text-[19px] font-semibold text-white transition-colors duration-300" to={''} onClick={handleLinkClick}>
              <TiHomeOutline className="mr-2" /> Home
            </Link>

            <Link className="relative flex items-center py-2 px-2 text-[19px] font-semibold text-white transition-colors duration-300" to={'about'} onClick={handleLinkClick}>
              <LuUser2 className="mr-2" /> About
            </Link>

            <Link className="relative flex items-center py-2 px-2 text-[19px] font-semibold text-white transition-colors duration-300" to={'projects'} onClick={handleLinkClick}>
              <AiOutlineFundProjectionScreen className="mr-2" /> Projects
            </Link>

            <Link className="relative flex items-center py-2 px-2 text-[19px] font-semibold text-white transition-colors duration-300" to={'experience'} onClick={handleLinkClick}>
              <PiNotebookLight className="mr-2" /> Experience
            </Link>

            <Link className="relative flex items-center py-2 px-2 text-[19px] font-semibold text-white transition-colors duration-300" to={'contact'} onClick={handleLinkClick}>
              <MdOutlineContactless className="mr-2" /> Contact
            </Link>

            <a className="relative flex items-center py-2 px-2 text-[19px] font-semibold text-white transition-colors duration-300" href="" onClick={handleLinkClick}>
              <RxResume className="mr-2" /> Resume
            </a>

            <a className="relative flex items-center py-2 px-2 text-[19px] font-semibold text-white transition-colors duration-300" href="https://github.com/Mohammadasad098" onClick={handleLinkClick}>
              <FaGithub className="mr-2" /> Github
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
