import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Bookings from './components/Bookings';
import AddCarForm from './components/AddCarForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bookings />} />
        <Route path="/add-car" element={<AddCarForm />} />
      </Routes>
    </Router>
  );
}

export default App;
