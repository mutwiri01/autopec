import { Link } from "react-router-dom";
import logo from "../assets/img/l.png";

const Footer = () => {
  const mapUrl = "https://maps.app.goo.gl/pCEjDuyB3aZW85Rz7";
  const addressName = "Kangundo Rd, Nairobi (Opposite Coca Cola Preform Plant)";

  return (
    <footer className="bg-secondary text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-4">
          {/* Replace with actual AutoPec logo */}
          <img src={logo} alt="AutoPec Logo" className="h-12" />

        </div>
        
        <div className="mb-4 text-center">
          <Link
            to={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-yellow-100 font-semibold transition duration-300 ease-in-out"
          >
            Get Directions
          </Link>
          <p className="text-sm mt-2">{addressName}</p>
        </div>
        
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} AutoPec. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
