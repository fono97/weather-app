import React, {useState,useEffect} from 'react';
import './App.css';

import WeatherCard from './components/component';


function App() {
  const[query,setQuery] = useState("gabon")
  const [weather, setWeather] = useState({
    temp:null,
    city:null,
    condition:null,
    country:null
  });
  const data = async (q) =>{
    const apiRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${q},gb&APPID=239540bf8f08676bf711b3f51ce1f1a6`);
    const resJSON = await apiRes.json();
    return resJSON
  };
  const handleSearch = e =>{
    e.preventDefault();
    data(query).then(res =>{
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.country
      })
    });
  };
  useEffect(() =>{
    data(query).then(res =>{
      setWeather({
        temp:res.main.temp,
        city:res.name,
        condition:res.weather[0].main,
        country:res.country
      })
    })
  },[]);
  return (
    <div className="App">
      <WeatherCard 
      temp ={weather.temp}
      condition={weather.condition}
      city={weather.city}
      country = {weather.country}
      />
      <form>
        <input value = {query} onChange = {e =>setQuery(e.target.value)}/>
      <button onclick = {e => handleSearch(e)}>Search</button>
      </form>
    </div>
  )
}

export default App;
