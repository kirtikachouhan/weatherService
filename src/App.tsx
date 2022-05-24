import React, {useState} from 'react';
import './App.css';
import WeatherComponent from './components/weatherComponent/weatherComponent';

function App() {
  let [pincode, updatePincode] =useState('');
  return (
    <div className="App">
      <header className="App-header">
          <h1>Weather Service</h1>
      </header>
      <div className="container">
        <div>
          <input type="text" onChange={(event)=> {updatePincode(event.target.value)}}/>
        </div>
        <WeatherComponent pincodeData={pincode}></WeatherComponent>
      </div>
      <footer className="App-footer">
        Copy Right 2022
      </footer>
    </div>
  );
}

export default App;
