import React from 'react';
import './App.css';

import WeatherCard from './components/component';

function App() {
  return (
    <div className="App">
      <WeatherCard temp = {-10}/>
      <WeatherCard temp = {40} />
      <WeatherCard temp = {-30} />
    </div>
  )
}

export default App;
