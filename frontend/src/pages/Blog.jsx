// src/pages/Blog.jsx
import b1 from '/a1.jpg';
import b2 from '/a2.jpg';
import b3 from '/a3.png';
import b4 from '/approch.jpg';
import b5 from '/news1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faTools, faCar, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '../components/css/Blog.css'; // Ensure to create this CSS file

const Blog = () => {
  const blogPosts = [
    {
      title: '5 Essential Car Maintenance Tips',
      date: 'October 7, 2024',
      content: `Keeping your car in good shape requires regular maintenance. Here are 5 essential tips to extend your car's lifespan: 
      1. Check the oil regularly. 
      2. Keep tires properly inflated. 
      3. Change your air filter every 12,000 miles. 
      4. Inspect the brakes regularly. 
      5. Keep the car clean, inside and out.`,
      imageUrl: b1,
    },
    {
      title: 'How to Diagnose Engine Issues',
      date: 'October 1, 2024',
      content: `Engine problems can range from minor to severe. Learn how to identify common signs such as abnormal sounds, check engine lights, or unusual vibrations. 
      If you encounter these issues, consult a professional mechanic.`,
      imageUrl: b2,
    },
    {
      title: 'Recent Fixes: Showcasing Our Work',
      date: 'September 28, 2024',
      content: `Here are some of the cars we've recently fixed in our workshop. From major engine repairs to cosmetic upgrades, we're proud of the work we've done. 
      Our team is dedicated to providing top-notch service to our customers.`,
      imageUrl: b3,
    },
    {
      title: 'Understanding Car Insurance',
      date: 'September 20, 2024',
      content: `Car insurance can be confusing. It's important to understand your coverage options and what they mean for you. 
      Always review your policy annually to ensure you're getting the best rates and coverage.`,
      imageUrl: b4, // Add an appropriate image for this post
    },
    {
      title: 'Driving Tips',
      date: 'September 15, 2024',
      content: `Driving in winter can be challenging. Here are some tips to ensure your safety on the road: 
      - Keep an emergency kit in your car. 
      - Drive slowly and maintain distance from other vehicles. 
      - Always clear your windows before driving.`,
      imageUrl:b5, // Add an appropriate image for this post
    },
  ];

  return (
    <div className="pt-24 container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Car Advice & Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.date}</p>
              <p className="mt-4">{post.content}</p>
              <div className="flex mt-4 space-x-2">
                <FontAwesomeIcon icon={faWrench} className="text-teal-500" />
                <FontAwesomeIcon icon={faTools} className="text-teal-500" />
                <FontAwesomeIcon icon={faCar} className="text-teal-500" />
                <FontAwesomeIcon icon={faInfoCircle} className="text-teal-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
