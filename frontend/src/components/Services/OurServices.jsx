import { GiCarWheel } from "react-icons/gi";
import { SiGoogleearthengine } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { SiCoronaengine } from "react-icons/si";
import ServiceCards from "./ServiceCards";
import '../css/Services.css';

// Importing images
import tireWheelsBefore from '../../assets/img/p2.jpg';
import tireWheelsAfter from '../../assets/img/p1.jpg';
import exhaustBefore from '../../assets/img/prado1.jpg';
import exhaustAfter from '../../assets/img/prado5.jpg';
import maintenanceBefore from '../../assets/img/a2.jpg';
import maintenanceAfter from '../../assets/img/tx1.jpg';
import brakeRepairBefore from '../../assets/img/c1.jpg';
import brakeRepairAfter from '../../assets/img/wash-5144828_1280.jpg';
import bodyServiceBefore from '../../assets/img/hilux1.jpg';
import bodyServiceAfter from '../../assets/img/hilux2.jpg';
import engineServiceBefore from '../../assets/img/a1.jpg';
import engineServiceAfter from '../../assets/img/pa1.jpeg';

const OurServices = () => {
  const icon1 = <GiCarWheel className="text-green-500 mx-auto" size={48} />;
  const icon2 = <SiGoogleearthengine className="text-green-500 mx-auto" size={48} />;
  const icon3 = <MdDesignServices className="text-green-500 mx-auto" size={48} />;
  const icon4 = <IoSettings className="text-green-500 mx-auto" size={48} />;
  const icon5 = <FaCar className="text-green-500 mx-auto" size={48} />;
  const icon6 = <SiCoronaengine className="text-green-500 mx-auto" size={48} />;

  return (
    <div className="container pt-24">
      <div>
        <h1 className="font-bold text-4xl text-center">
          Our <span className="text-primary">Services</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <ServiceCards
          icon={icon1}
          title="Body Work and Panel Beating"
          description="We have a special workshop designed for body work only with state of the art equipment for welding, putt fillers, spray guns, body stretcher for steel, alloys and fixing plastic and fibreglass parts"
          imgBefore={tireWheelsBefore}
          imgAfter={tireWheelsAfter}
        />
        <ServiceCards
          icon={icon2}
          title="Buffing"
          description="Our professional buffing services are designed to bring back the lost shine of your car's paint. We use advanced polishing techniques to remove minor scratches and imperfections, restoring the clear coat of your car's paintwork. "
          imgBefore={exhaustBefore}
          imgAfter={exhaustAfter}
        />
        <ServiceCards
          icon={icon3}
          title="Engine Diagnostics and Repair"
          description="Our technicians are equipped with the latest diagnostic tools to quickly and accurately identify any engine issues. From minor repairs to complete engine rebuilds, we ensure your vehicle runs smoothly and efficiently"
          imgBefore={maintenanceBefore}
          imgAfter={maintenanceAfter}
        />
        <ServiceCards
          icon={icon4}
          title="Carwash"
          description="At Autopec, we take car washing to the next level with a range of professional car detailing services. We adhere to internationally recognized standards, ensuring your vehicle is cleaned and polished to perfection."
          imgBefore={brakeRepairBefore}
          imgAfter={brakeRepairAfter}
        />
        <ServiceCards
          icon={icon5}
          title="Mechanical Services"
          description="Routine mechanical services are essential for maintaining your car's optimal performance, safety, and fuel efficiency. Our comprehensive mechanical services include everything from oil changes to full engine overhauls. "
          imgBefore={bodyServiceBefore}
          imgAfter={bodyServiceAfter}
        />
        <ServiceCards
          icon={icon6}
          title="Paint Job Services"
          description=" we provide top-tier paint job services tailored to meet the highest industry standards. Whether your vehicle needs a fresh coat of paint after repairs or you want to change the color entirely, our expert technicians use advanced techniques and high-quality materials to deliver a flawless finish. We offer everything from color matching for touch-ups to full vehicle repaints. "
          imgBefore={engineServiceBefore}
          imgAfter={engineServiceAfter}
        />
      </div>
    </div>
  );
};

export default OurServices;
