import './App.css';
import { useEffect, useState,  } from 'react';
import Header from "../src/Components/Header";
import WeCard from "../src/Components/Card";
import axios from "axios";
import Footer from "../src/Components/Footer";

const URL = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = `eb397437d546631c3dd99ccf258c9df7`

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState("");
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [sky, setSky] = useState("");

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position){
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

    });
   axios.get(`${URL}?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
   .then((Weatherdata) =>{
     console.log(Weatherdata.data);
     setTemp(Weatherdata.data.main.temp);
     setSunrise(Weatherdata.data.sys.sunrise);
     setSunset(Weatherdata.data.sys.sunset);
     setHumidity(Weatherdata.data.main.humidity);
     setCity(Weatherdata.data.name);
     setSky(Weatherdata.data.weather[0].main)

   })
  }, [latitude, longitude])
  return (
    <div className="main">
      <Header />
      <WeCard temp={temp}
      city={city}
      sunrise={sunrise}
      sunset={sunset}
      humidity={humidity}
      sky={sky}
      />
      <Footer />
    </div>
  );
}

export default App;
