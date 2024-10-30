import { GiCarWheel } from "react-icons/gi";
import { SiGoogleearthengine } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { SiCoronaengine } from "react-icons/si";
import ServiceCards from "./ServiceCards";
import '../css/Services.css';

// Importing images
import tireWheelsBefore from '/lr2.jpg';
import tireWheelsAfter from '/lr1.jpg';
import exhaustBefore from '/buf2.jpg';
import exhaustAfter from '/re2.jpg';
import maintenanceBefore from '/a2.jpg';
import maintenanceAfter from '/e1.jpg';
import brakeRepairBefore from '/c1.jpg';
import brakeRepairAfter from '/cw2.png';
import bodyServiceBefore from '/d2.jpg';
import bodyServiceAfter from '/re5.jpg';
import engineServiceBefore from '/p4.jpg';
import engineServiceAfter from '/pa2.jpg';
import up from '/up1.jpg';
import up2 from '/up2.jpg';
import jp from '/jp.jpg';
import jp2 from '/jp2.jpg';
import led from '/prado5.jpg';
import led2 from '/re6.jpg';

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
          icon={icon4}
          title="LEDs lighting installation"
          description="Our LED lighting installation services bring a modern touch to your vehicle’s exterior and interior. With energy-efficient and stylish lighting options, we enhance visibility and aesthetic appeal, whether it's for headlights, interior ambient lighting, or other custom lighting needs."
          imgBefore={led}
          imgAfter={led2}
        />
        <ServiceCards
          icon={icon3}
          title="Upholstery Services"
          description="Our skilled team provides expert upholstery services to refresh and customize your car's interior, ensuring comfort and durability with premium materials tailored to your needs."
          imgBefore={up}
          imgAfter={up2}
        />
        <ServiceCards
          icon={icon2}
          title="Number Plate Fitting"
          description="We also provide number plate fitting, securing plates with precision to withstand all driving conditions."
          imgBefore={jp}
          imgAfter={jp2}
        />
        <ServiceCards
          icon={icon1}
          title="Body Work and Panel Beating"
          description="We have a special workshop designed for body work only with state-of-the-art equipment for welding, spray painting, and repairing plastic and fiberglass parts."
          imgBefore={tireWheelsBefore}
          imgAfter={tireWheelsAfter}
        />
        <ServiceCards
          icon={icon2}
          title="Buffing"
          description="Our professional buffing services are designed to bring back the lost shine of your car's paint. We use advanced polishing techniques to remove minor scratches and imperfections."
          imgBefore={exhaustBefore}
          imgAfter={exhaustAfter}
        />
        <ServiceCards
          icon={icon3}
          title="Engine Diagnostics and Repair"
          description="Our technicians are equipped with the latest diagnostic tools to quickly and accurately identify any engine issues. From minor repairs to complete engine rebuilds, we ensure your vehicle runs smoothly and efficiently."
          imgBefore={maintenanceBefore}
          imgAfter={maintenanceAfter}
        />
        <ServiceCards
          icon={icon4}
          title="Carwash"
          description="At Autopec, we provide professional car detailing services, adhering to internationally recognized standards to ensure a spotless finish."
          imgBefore={brakeRepairBefore}
          imgAfter={brakeRepairAfter}
        />
        <ServiceCards
          icon={icon5}
          title="Mechanical Services"
          description="Routine mechanical services are essential for maintaining your car's optimal performance, safety, and fuel efficiency. Our comprehensive services include everything from oil changes to full engine overhauls."
          imgBefore={bodyServiceBefore}
          imgAfter={bodyServiceAfter}
        />
        <ServiceCards
          icon={icon6}
          title="Paint Job Services"
          description="We provide top-tier paint job services tailored to meet industry standards. From color matching to full vehicle repaints, our expert technicians deliver a flawless finish."
          imgBefore={engineServiceBefore}
          imgAfter={engineServiceAfter}
        />
      </div>
    </div>
  );
};

export default OurServices;
