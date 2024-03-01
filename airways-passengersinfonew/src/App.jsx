import React from 'react';
import { Routes, Route } from "react-router-dom";
import PassengersInfoAdultPage from './Pages/PassengersInfoAdultPage';
import PassengersInfoInfantPage from './Pages/PassengersInfoInfantPage';
import './App.css'
import ModalPage from './Components/ModalPage/ModalPage';

function App() {
  return (
    <>
    <Routes>
    <Route exact path="/adult-info-page" element={<PassengersInfoAdultPage />} />
    <Route exact path="/infant-info-page" element={<PassengersInfoInfantPage />} />
    <Route exact path="/modal-info-page" element={<ModalPage />} />
      </Routes>
    </>
  )
}
export default App
