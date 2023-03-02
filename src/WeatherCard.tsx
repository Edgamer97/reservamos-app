import { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Result } from "./types";

const apiKey = "a5a47c18197737e8eeca634cd6acb581";

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
  const [dailyForecast, setDailyForecast] = useState([]);

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
      setDailyForecast(data.daily.slice(1) || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    onSearchForecast();
    // eslint-disable-next-line
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
