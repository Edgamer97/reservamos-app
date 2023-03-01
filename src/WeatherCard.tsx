import { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Result } from "./types";

const apiKey = process.env.API_KEY;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WeatherCard = ({ result }: { result: Result }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dailyForecast, setDailyForecast] = useState([
    {
      dt: 1618308000,
      sunrise: 1618282134,
      sunset: 1618333901,
      moonrise: 1618284960,
      moonset: 1618339740,
      moon_phase: 0.04,
      temp: {
        day: 279.79,
        min: 20.09,
        max: 30.07,
        night: 275.09,
        eve: 279.21,
        morn: 278.49,
      },
      feels_like: {
        day: 277.59,
        night: 276.27,
        eve: 276.49,
        morn: 276.27,
      },
      pressure: 1020,
      humidity: 81,
      dew_point: 276.77,
      wind_speed: 3.06,
      wind_deg: 294,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 56,
      pop: 0.2,
      rain: 0.62,
      uvi: 1.93,
    },
    {
      dt: 1618308000,
      sunrise: 1618282134,
      sunset: 1618333901,
      moonrise: 1618284960,
      moonset: 1618339740,
      moon_phase: 0.04,
      temp: {
        day: 279.79,
        min: 20.09,
        max: 30.07,
        night: 275.09,
        eve: 279.21,
        morn: 278.49,
      },
      feels_like: {
        day: 277.59,
        night: 276.27,
        eve: 276.49,
        morn: 276.27,
      },
      pressure: 1020,
      humidity: 81,
      dew_point: 276.77,
      wind_speed: 3.06,
      wind_deg: 294,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 56,
      pop: 0.2,
      rain: 0.62,
      uvi: 1.93,
    },
    {
      dt: 1618308000,
      sunrise: 1618282134,
      sunset: 1618333901,
      moonrise: 1618284960,
      moonset: 1618339740,
      moon_phase: 0.04,
      temp: {
        day: 279.79,
        min: 20.09,
        max: 30.07,
        night: 275.09,
        eve: 279.21,
        morn: 278.49,
      },
      feels_like: {
        day: 277.59,
        night: 276.27,
        eve: 276.49,
        morn: 276.27,
      },
      pressure: 1020,
      humidity: 81,
      dew_point: 276.77,
      wind_speed: 3.06,
      wind_deg: 294,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 56,
      pop: 0.2,
      rain: 0.62,
      uvi: 1.93,
    },
    {
      dt: 1618308000,
      sunrise: 1618282134,
      sunset: 1618333901,
      moonrise: 1618284960,
      moonset: 1618339740,
      moon_phase: 0.04,
      temp: {
        day: 279.79,
        min: 20.09,
        max: 30.07,
        night: 275.09,
        eve: 279.21,
        morn: 278.49,
      },
      feels_like: {
        day: 277.59,
        night: 276.27,
        eve: 276.49,
        morn: 276.27,
      },
      pressure: 1020,
      humidity: 81,
      dew_point: 276.77,
      wind_speed: 3.06,
      wind_deg: 294,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 56,
      pop: 0.2,
      rain: 0.62,
      uvi: 1.93,
    },
    {
      dt: 1618308000,
      sunrise: 1618282134,
      sunset: 1618333901,
      moonrise: 1618284960,
      moonset: 1618339740,
      moon_phase: 0.04,
      temp: {
        day: 279.79,
        min: 20.09,
        max: 30.07,
        night: 275.09,
        eve: 279.21,
        morn: 278.49,
      },
      feels_like: {
        day: 277.59,
        night: 276.27,
        eve: 276.49,
        morn: 276.27,
      },
      pressure: 1020,
      humidity: 81,
      dew_point: 276.77,
      wind_speed: 3.06,
      wind_deg: 294,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 56,
      pop: 0.2,
      rain: 0.62,
      uvi: 1.93,
    },
    {
      dt: 1618308000,
      sunrise: 1618282134,
      sunset: 1618333901,
      moonrise: 1618284960,
      moonset: 1618339740,
      moon_phase: 0.04,
      temp: {
        day: 279.79,
        min: 20.09,
        max: 30.07,
        night: 275.09,
        eve: 279.21,
        morn: 278.49,
      },
      feels_like: {
        day: 277.59,
        night: 276.27,
        eve: 276.49,
        morn: 276.27,
      },
      pressure: 1020,
      humidity: 81,
      dew_point: 276.77,
      wind_speed: 3.06,
      wind_deg: 294,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 56,
      pop: 0.2,
      rain: 0.62,
      uvi: 1.93,
    },
    {
      dt: 1618308000,
      sunrise: 1618282134,
      sunset: 1618333901,
      moonrise: 1618284960,
      moonset: 1618339740,
      moon_phase: 0.04,
      temp: {
        day: 279.79,
        min: 20.09,
        max: 30.07,
        night: 275.09,
        eve: 279.21,
        morn: 278.49,
      },
      feels_like: {
        day: 277.59,
        night: 276.27,
        eve: 276.49,
        morn: 276.27,
      },
      pressure: 1020,
      humidity: 81,
      dew_point: 276.77,
      wind_speed: 3.06,
      wind_deg: 294,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 56,
      pop: 0.2,
      rain: 0.62,
      uvi: 1.93,
    },
  ]);

  const getDay = (dt: number) => {
    let d = new Date(dt * 1000);
    return days[d.getDay()];
  };

  const onSearchForecast = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${result.lat}&lon=${result.long}&units=metric&exclude=minutely,hourly,alerts&appid=${apiKey}`
      );
      const data = await response.json();
      setDailyForecast(data.daily || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    /* onSearchForecast(); */
  }, []);

  return (
    <Card className="mb-2" style={{ width: loading ? 732 : "fit-content" }}>
      <CardBody>
        <div className="mb-4">
          <h4>{result.city_name}</h4>
        </div>
        <div className="d-flex">
          {loading && <div className="mx-auto">Loading...</div>}
          {!loading &&
            dailyForecast.map((item, i) => (
              <div className="d-flex" style={{ marginRight: 20 }} key={i}>
                <div className="d-flex align-items-center">
                  <div>
                    <div>{getDay(item.dt)}</div>
                    <img
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      alt="Icon"
                      width={80}
                    />
                    <div>
                      <b>Min:</b> {Math.floor(+item.temp?.min) + " ºC"}
                    </div>
                    <div>
                      <b>Max:</b> {Math.floor(+item.temp?.max) + " ºC"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default WeatherCard;
