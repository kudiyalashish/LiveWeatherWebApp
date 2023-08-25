import image from "../image/clear.png";
import clear from "../image/clear.png";
import cloud from "../image/cloud.png";
import haze from "../image/haze.png";
import mist from "../image/mist.png";
import rain from "../image/rain.png";
import snow from "../image/snow.png";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { BsFillDropletFill } from "react-icons/bs";
import { RiWindyFill } from "react-icons/ri";
import { GiPressureCooker } from "react-icons/gi";

function getWeatherIcon(name) {
  if (name === "Clear") return clear;
  else if (name === "Clouds") return cloud;
  else if (name === "Haze") return haze;
  else if (name === "Mist") return mist;
  else if (name === "Rain") return rain;
  else return snow;
}

function Current({ data }) {
  return (
    <div className="current-box">
      <div className="current-weather-heading">
        <h3>Current Weather</h3>
      </div>
      <div className="current-weather-boxes">
        <div className="current-weather-left-box">
          <div className="city-name">
            <h3>{data ? data.timezone : null}</h3>
          </div>
          <div className="icon-and-temp">
            <div className="icon">
              <img
                src={data ? getWeatherIcon(data.current.weather[0].main) : snow}
                width="200"
                alt="icon"
              />
            </div>
            <div className="temp">
              {" "}
              {data ? Math.round(data.current.temp) : null}°
            </div>
          </div>
          <div className="current-weather-name">
            <h3>{data ? data.current.weather[0].main : null}</h3>
          </div>
        </div>
        <div className="current-weather-right-box">
          <div className="feels-like">
            {" "}
            Feels Like {data ? data.current.feels_like : null}°
          </div>
          <div className="arrows">
            <div className="up">
              <ImArrowUp />
              {data ? Math.round(data.current.temp) : null} °
            </div>
            <div className="down">
              <ImArrowDown />
              {data ? Math.round(data.current.feels_like) : null} °
            </div>
          </div>
          <div className="table">
            <table>
              <tr>
                <td className="ticon">
                  <BsFillDropletFill />
                </td>
                <td className="key">Humidity</td>
                <td className="value">{data ? data.current.humidity : null}</td>
              </tr>

              <tr>
                <td className="ticon">
                  <RiWindyFill />
                </td>
                <td className="key">Wind</td>
                <td className="value">
                  {data ? data.current.wind_speed : null}kph
                </td>
              </tr>

              <tr>
                <td className="ticon">
                  <GiPressureCooker />
                </td>
                <td className="key">Pressure</td>
                <td className="value">
                  {data ? data.current.pressure : null}hPa
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Current;
