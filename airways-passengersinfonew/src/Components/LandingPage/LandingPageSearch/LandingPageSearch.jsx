import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPageSearch.css';
import axios from 'axios';
import PassengersInfoMiddleTab from '../../PassengersInfoAdultPage/PassengersInfoMiddleTab/PassengersInfoMiddleTab';

const Search = (props) => {
  const [departurePort, setDeparturePort] = useState('');
  const [arrivalPort, setArrivalPort] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const[returnDate, setReturnDate] = useState('')
  const [noOfAdult, setNoOfAdult] = useState(0)
  const [noOfChildren, setNoOfChildren] = useState(0)
  const [noOfInfant, setNoOfInfant] = useState(0)
  const[tripType, setTripType] = useState("ONE_WAY")
  const [flights, setFlights] = useState([]);
  const [departureOptions, setDepartureOptions] = useState([]);
  const [arrivalOptions, setArrivalOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleOptionChange = (event) => {
    setTripType(event.target.value);
  };

  useEffect(() => {
    const fetchPorts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/airports/all-airports');
        setDepartureOptions(response.data);
        setArrivalOptions(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching ports:', error);
      }
    };

    fetchPorts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); 
  
    axios.get(`http://localhost:8080/api/v1/flights/availableFlight?flightDirection=${tripType}&departurePort=${departurePort}&arrivalPort=${arrivalPort}&departureDate=${departureDate}&returnDate=${returnDate}&noOfAdult=${noOfAdult}&noOfChildren=${noOfChildren}&noOfInfant=${noOfInfant}`)
      .then(response => {
        setFlights(response.data);
        console.log(response);
        console.log(departureDate, departurePort, arrivalPort, noOfAdult, noOfChildren, noOfInfant, returnDate)
        navigate(`/flight-select`, { state: { flights: JSON.stringify(response.data),
         } })
      })
      .catch(error => {
        console.error(`Error fetching flights:`, error);
        alert("NOT FOUND")
      });
  };
  
  return(
  
  <div className="backgroundd">
    <div className="searchcs">
    <div className="booking-header">
  <button className="btnsty">
    <img src="src/Components/LandingPage/images/plane 1.png" alt="Flights" class="icon" /><span class="flight-text">Flights</span>
  </button>
  <button className="btnsty">
    <img src="src/Components/LandingPage/images/Vector.png" alt="Login" class="icon" /><span class="flight-text"> Log In</span>
  </button>
</div>

      <div className="search-container">
        {/* Search form content */}
        <form className="search-form" onSubmit={handleSearch}>
          <div className="formimg"><img src="src/Components/LandingPage/images/Polygon 1.png" /></div>
          <div className="trip-type">
              <input
                type="radio"
                id="ONE_WAY"
                name="trip-type"
                value="ONE_WAY"
                checked={tripType === 'ONE_WAY'}
                onChange={handleOptionChange}
  
              />
              <label className="labell" htmlFor="ONE_WAY">One Way</label>
              <input
                type="radio"
                id="ROUND_TRIP"
                name="trip-type"
                value="ROUND_TRIP"
                checked={tripType === 'ROUND_TRIP'}
                onChange={handleOptionChange}
              />
              <label className="labell" htmlFor="ROUND_TRIP">Round Trip</label>
            </div>
            <div className="form-row">
              <div className="input-groupp">
                <label className="labell" htmlFor="from">From</label>
                <select id="from" value={departurePort} onChange={(e) => setDeparturePort(e.target.value)}>
                  <option value="">Select...</option>
                  {departureOptions?.map((port) => (
                    <option key={port.iataCode} value={port.iataCode}>
                      {port.name} - {port.city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-groupp">
                <label className="labell" htmlFor="to">To</label>
                <select id="to" value={arrivalPort} onChange={(e) => setArrivalPort(e.target.value)}>
                  <option value="">Select...</option>
                  {arrivalOptions?.map((port) => (
                    <option key={port.iataCode} value={port.iataCode}>
                      {port.name} - { port.city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          <div className="form-row">
            <div className="input-groupp">
              <label className="labell" htmlFor="departure">Departure Date</label>
              <input type="date" id="departure" value={departureDate} onChange={e => setDepartureDate(e.target.value)}/>
              </div>
              {tripType === 'ROUND_TRIP' && (
                <div className="input-groupp">
                  <label className="labell" htmlFor="return">Arrival Date</label>
                  <input type="date" id="return" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
                </div>
)}
          </div>
          <div className="form-row">
            <div className="input-group">
              <label className="labell" htmlFor="child">Child</label>
                <select id="child" type="number" value={noOfChildren} onChange={e => setNoOfChildren(e.target.value)}>
                <option value= "0">0</option>
                <option value= "1">1</option>
                <option value= "2">2</option>
                <option value= "3">3</option>
                <option value= "4">4</option>
                <option value= "5">5</option>
              </select>
            </div>
            <div className="input-group">
              <label className="labell" htmlFor="adult">Adult</label>
                <select id="adult" value={noOfAdult} type="number" onChange={e => setNoOfAdult(e.target.value)}>
                <option value= "0">0</option>
              <option value= "1">1</option>
                <option value= "2">2</option>
                <option value= "3">3</option>
                <option value= "4">4</option>
                <option value= "5">5</option>
              </select>
            </div>
            <div className="input-group">
              <label className="labell" htmlFor="infant">Infant</label>
                <select id="infant" value={noOfInfant} type="number" onChange={e => setNoOfInfant(e.target.value)}>
                <option value= "0">0</option>
              <option value= "1">1</option>
                <option value= "2">2</option>
                <option value= "3">3</option>
                <option value= "4">4</option>
                <option value= "5">5</option>
              </select>
            </div>
          </div>
          <button className="search-button" type='button' onClick={handleSearch}>Search Flights</button>
        </form>
      </div>
      </div>
</div>
  )
};
export default Search;