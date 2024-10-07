import { Link } from "react-router-dom";
import logo from "../assets/img/l.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const mapUrl = "https://maps.app.goo.gl/pCEjDuyB3aZW85Rz7";
  const addressName = "Kangundo Rd, Nairobi (Opposite Coca Cola Preform Plant)";
  const email = "autopeclogistics@gmail.com";
  const phone = "0722 746 454";

  return (
    <footer className="bg-secondary text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-4">
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

        <div className="mb-4 text-center">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-300" />
            <a
              href={`mailto:${email}`}
              className="text-yellow-300 hover:text-yellow-100 transition duration-300 ease-in-out"
            >
              {email}
            </a>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <FontAwesomeIcon icon={faPhone} className="text-yellow-300" />
            <a
              href={`tel:${phone}`}
              className="text-yellow-300 hover:text-yellow-100 transition duration-300 ease-in-out"
            >
              {phone}
            </a>
          </div>
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
