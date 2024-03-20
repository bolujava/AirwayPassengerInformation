import React from 'react';
import './PassengersInfoMiddleTab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const PassengersInfoMiddleTab = ({
  departurePort,
  arrivalPort,
  departureDate,
  returnDate,
  noOfAdult,
  noOfChildren,
  noOfInfant,
  tripType
}) => {

  return (
    <div>
      <div className="middletab-adult">
        <input type="text" placeholder="Search..." className="search-input"/>
        <button className="search-button" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <div className="flightdetails-adult">
          <h3>{departurePort} - {arrivalPort}</h3>
          <h4>{departureDate} - {returnDate} | {noOfAdult} Adult, {noOfChildren} Child, {noOfInfant} Infant | {tripType}</h4>
        </div>
        <div className="total-price-container-adult">
          <h1>Total Price</h1>
          <h4>NGN 200,000</h4>
        </div>
      </div>
    </div>
  );
};
export default PassengersInfoMiddleTab; 
