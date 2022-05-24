import React, { useState } from 'react';
import './App.css';
import WeatherComponent from './components/weatherComponent/weatherComponent';
// import debounce from 'lodash.debounce';

function App() {
  let [pincode, updatePincode] = useState('');
  let [tempType, updateTempType] = useState('');

  const setWeatherData = (data: string) => {
    // return debounce((data) => { return updatePincode(data)}, 100);
    if(data.length>=6){
      return updatePincode(data);
    }
  }


  const seTempData = (data:string) => {
    return updateTempType(data);
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Service</h1>
      </header>
      <section>
        <div className="container" >
          <div className="container-body">
            <input type="text" onChange={(event) => { setWeatherData(event.target.value) }} />
            &nbsp;&nbsp;&nbsp;
            <label htmlFor="temperature">Choose a Tempertaure Type:</label>
            <select name="temperature" id="temperature" onChange={(event) => { seTempData(event.target.value) }}>
              <option value="farenhite">Farenhite</option>
              <option value="celcius" >Celcius</option>
            </select>

          </div>
          <div className="container-weather">
            <WeatherComponent pincodeData={pincode} tempType={tempType}></WeatherComponent>
          </div>
        </div>
      </section>
      <footer className="App-footer">
        Copy Right 2022
      </footer>
    </div>
  );
}

export default App;
