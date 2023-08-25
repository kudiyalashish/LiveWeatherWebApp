import { useEffect, useState } from "react";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Head from "./components/Head";
import Search from "./components/Search";
import "./styles.css";
import axios from "axios";
export default function App() {
  const [data, setData] = useState(null);

  function getWeatherData(city) {
    const options = {
      method: "GET",
      url: "https://open-weather13.p.rapidapi.com/city/" + city,
      headers: {
        "X-RapidAPI-Key": "585d270f37mshd87a7ec3559823dp1e36fdjsn1346b1d51561",
        "X-RapidAPI-Host": "open-weather13.p.rapidapi.com"
      }
    };

    axios.request(options).then(function (response) {
      if (response.data) {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=metric&lang=tr&appid=34480b98aa332da53123a0ac63a4ea9d`
          )
          .then(function (resp) {
            setData(resp.data);
          });
      }
    });
  }

  useEffect(function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&lang=tr&appid=34480b98aa332da53123a0ac63a4ea9d`
        )
        .then(function (response) {
          setData(response.data);
        });
    });
  }, []);

  return (
    <div className="App">
      <Head />
      <Search func={getWeatherData} />
      <Current data={data} />
      <Forecast data2={data} />
    </div>
  );
}
