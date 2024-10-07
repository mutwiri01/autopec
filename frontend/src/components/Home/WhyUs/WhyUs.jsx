import WhyUsCard from "./WhyUsCard";
import { FaTools, FaCog, FaCarSide, FaClipboardCheck, FaUserFriends, FaMoneyBillWave, FaHandshake } from "react-icons/fa";

const WhyUs = () => {
  const whyUsData = [
    {
      icon: <FaTools className="text-primary mx-auto" size={48} />,
      title: "Expertise and Experience",
      description: "Our highly trained technicians have years of experience in mechanical repairs, bodywork, and custom paint jobs."
    },
    {
      icon: <FaCog className="text-primary mx-auto" size={48} />,
      title: "State-of-the-Art Equipment",
      description: "We utilize the latest tools and technology for efficient and precise diagnostics, repairs, and paintwork."
    },
    {
      icon: <FaCarSide className="text-primary mx-auto" size={48} />,
      title: "Comprehensive Services",
      description: "From mechanical servicing to bodywork, paint jobs, detailing, and car sales - we offer it all under one roof."
    },
    {
      icon: <FaClipboardCheck className="text-primary mx-auto" size={48} />,
      title: "High-Quality Materials",
      description: "We use only the best materials for every job, ensuring long-lasting results and utmost customer satisfaction."
    },
    {
      icon: <FaUserFriends className="text-primary mx-auto" size={48} />,
      title: "Customer-Centric Approach",
      description: "Your satisfaction is our priority. Expect clear communication and personalized attention throughout our service."
    },
    {
      icon: <FaMoneyBillWave className="text-primary mx-auto" size={48} />,
      title: "Competitive Pricing",
      description: "We offer high-quality services at competitive prices, providing premium care without breaking your budget."
    },
    {
      icon: <FaHandshake className="text-primary mx-auto" size={48} />,
      title: "Trust and Integrity",
      description: "Our reputation is built on trust and quality. We stand behind our work, ensuring your vehicle leaves in the best condition."
    }
  ];

  return (
    <div className="flex flex-col justify-center container md:mt-16 py-10">
      <h1 className="font-bold text-4xl text-center">
        Why choose <span className="text-primary">Autopec</span>?
      </h1>

      <p className="text-center mt-4 mb-8">
        At Autopec, we are committed to delivering exceptional automotive services that set us apart in the industry. Here's why customers continue to trust us with their vehicles:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyUsData.map((item, index) => (
          <WhyUsCard key={index} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
