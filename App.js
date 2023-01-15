import React, { useState } from 'react';
import './App.css';

function App() {

  const API_KEY = "384530a26df84465ffe7e9419c8ef8db";
  const [zip, setZip] = useState("");
  const [weather, setWeather] = useState([{}]);

  const fetchWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${API_KEY}`).then(
        response => response.json()).then(
          data => {
            setWeather(data)
          }
        )
    }
  }

  return (
    <div className="App">
      <h3>Praveen's Weather Application</h3>
      <h5>Input Zip Code below and press enter:</h5>
      <input
        className='input'
        placeholder='zip code'
        onChange={e => setZip(e.target.value)}
        value = {zip}
        onKeyPress={fetchWeather}
      />
      {typeof weather.main === 'undefined' ? (
        <div>
        </div>
      ): (
        <table className='table'>
          <thead>
            <tr>
              <th>Zip Code</th>
              <th>City Name</th>
              <th>Temperature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{zip}</td>
              <td>{weather.name}</td>
              <td>{Math.round(weather.main.temp)} degrees fahrenheit</td>
            </tr>

          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
