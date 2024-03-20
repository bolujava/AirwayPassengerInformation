import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PassengersInfoAdultPage from './Pages/PassengersInfoAdultPage';
import PassengersInfoInfantPage from './Pages/PassengersInfoInfantPage';
import BookingConfirmationPage from './Pages/BookingConfirmationPage';
import LandingPage from './Pages/LandingPage';
import './App.css'
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/searchflight" element={<LandingPage />} />
    <Route exact path="/booking-confirmation" element={<BookingConfirmationPage />} />
    <Route exact path="/adult-info-page" element={<PassengersInfoAdultPage />} />
    <Route exact path="/infant-info-page" element={<PassengersInfoInfantPage />} />
      </Routes>
      </Router>
    </>
  )
}
export default App