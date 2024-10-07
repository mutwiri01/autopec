import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCar, faClipboardList, faRobot } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('https://autopeccloud.vercel.app/api/bookings');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading) return <div className="text-center py-4">Loading bookings...</div>;

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">All Bookings</h2>
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
          <tr>
            <th className="py-3 px-4 text-left flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Customer Name
            </th>
            <th className="py-3 px-4 text-left flex items-center">
              <FontAwesomeIcon icon={faCar} className="mr-2" />
              Car Registration
            </th>
            <th className="py-3 px-4 text-left flex items-center">
              <FontAwesomeIcon icon={faCar} className="mr-2" />
              Car Make
            </th>
            <th className="py-3 px-4 text-left flex items-center">
              <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
              Problem Description
            </th>
            <th className="py-3 px-4 text-left flex items-center">
              <FontAwesomeIcon icon={faRobot} className="mr-2" />
              Diagnosis
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id} className="hover:bg-gray-100 transition-colors">
              <td className="py-3 px-4 border-b border-gray-200">{booking.customerName}</td>
              <td className="py-3 px-4 border-b border-gray-200">{booking.carRegistrationNumber}</td>
              <td className="py-3 px-4 border-b border-gray-200">{booking.carMake}</td>
              <td className="py-3 px-4 border-b border-gray-200">{booking.problemDescription}</td>
              <td className="py-3 px-4 border-b border-gray-200">{booking.diagnosis}</td> {/* Added diagnosis column */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
