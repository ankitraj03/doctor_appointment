import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Doctor from './components/Doctors';
import Homepage from './components/Homepage';
import AdminLogin from './components/AdminLogin';
import DoctorPanel from './components/DoctorPanel';
import Header from './components/Header';
import SuperAdmin from './components/SuperAdmin'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
       
        <Route path="/" element={<Homepage />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:specialty" element={<Doctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment/:id" element={<Appointment />} />


        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<SuperAdmin />} />
        <Route path="/doctor-panel/:name" element={<DoctorPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
