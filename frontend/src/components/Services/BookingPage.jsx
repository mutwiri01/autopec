
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull,      faOilCan, faCarCrash, faTire, faWrench, faLightbulb, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import '../css/BookingPage.css';

const services = [
  { name: 'Battery', details: 'BATTERY TEST & FITMENT', icon: faBatteryFull },
  { name: 'Brakes', details: 'Brake Pads - FITTING PER PAIR, Brake Disks', icon: faCarCrash },
  { name: 'Oil Service - Minor', details: 'OIL, OIL FILTER, AIR FILTER', icon: faOilCan },
  { name: 'Oil Service - Major', details: 'OIL, OIL FILTER, AIR FILTER, SPARK PLUGS', icon: faOilCan },
  { name: 'Suspension', details: 'Shock Absorbers and Alignment, Coil springs & alignment', icon: faWrench },
  { name: 'Tyre Fitment - Passenger Car', details: 'Tyre fitment and balancing, Wheel alignment', icon: faTire },
  { name: 'Inspection', details: 'General Inspection', icon: faClipboardCheck },
  { name: 'Electronic Diagnosis', details: 'Electronic diagnosis', icon: faWrench },
  { name: 'Light Bulbs', details: 'Light bulbs', icon: faLightbulb },
  { name: 'Wipers', details: 'Wiper replacement', icon: faWrench }
];

const BookingPage = () => {
  return (
    <div className="booking-page">
      <h1 className="page-title">Book a Service</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
            <h2>{service.name}</h2>
            <p>{service.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
