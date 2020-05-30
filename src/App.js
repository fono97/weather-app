import React from 'react';
import './App.css';

import WeatherCard from './components/component';

function App() {
  return (
    <div className="App">
      <WeatherCard temp = {-5} condition ="clear" country ="AU"/>
      <WeatherCard temp={40} condition="Clouds" country="AU"/>
      <WeatherCard temp={-30} condition="Tornado" country="GB" />
    </div>
  )
}

export default App;
