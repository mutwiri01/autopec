import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/l.png'; // Replace with your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Autopec Logo" className="logo" />
        <h1>Autopec Admin</h1>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/add-car" className="nav-link">Add Car</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {/* Hamburger Icon */}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
