import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { FaCar, FaWrench, FaGasPump } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '/l.png';  // import your logo image
import './css/Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="fixed w-full z-20 top-0 bg-secondary text-white py-4 shadow-lg">
      {/* Desktop Navigation */}
      <nav className="container flex justify-between items-center mx-auto px-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="logo-animate h-10" />
          <Link to="/" className="name-animate font-bold text-2xl text-white">
            AUTOPEC LOGISTICS
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-xl">
          <Link to="/" className="hover:text-hover flex items-center gap-2 text-white">
            <FaCar /> Home
          </Link>
          <Link to="/services" className="hover:text-hover flex items-center gap-2 text-white">
            <FaGasPump /> Services
          </Link>
          <Link to="/blog" className="hover:text-hover flex items-center gap-2 text-white">
            <FaWrench /> Blog
          </Link>
          <Link to="/cars" className="hover:text-hover flex items-center gap-2 text-white">
            <FaWrench /> Book a Service
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      {/* Responsive Navigation */}
      <div
        className={`${menu ? "translate-x-0" : "-translate-x-full"} 
        md:hidden flex flex-col absolute bg-secondary text-white left-0 
        top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit 
        rounded-br-xl transition-transform duration-300`}
      >
        <Link to="/" className="hover:text-hover flex items-center gap-2 text-white" onClick={closeMenu}>
          <FaCar /> Home
        </Link>
        <Link to="/services" className="hover:text-hover flex items-center gap-2 text-white" onClick={closeMenu}>
          <FaGasPump /> Services
        </Link>
        <Link to="/blog" className="hover:text-hover flex items-center gap-2 text-white" onClick={closeMenu}>
          <FaWrench /> Blog
        </Link>
        <Link to="/cars" className="hover:text-hover flex items-center gap-2 text-white" onClick={closeMenu}>
          <FaWrench /> Book a Service
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
