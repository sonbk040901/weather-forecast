import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { WeatherInfoType, TemperatureType } from "@type/index";
import { convertF2C } from "@utils/convert";
import mapWeatherIcons from "@utils/mapWeatherIcons";
import Days from "@components/Days";
import "@styles/Forecast.scss";
export interface DataType {
  weatherInfo: WeatherInfoType;
  temperature: TemperatureType;
  Date: string;
}
interface DayProps {
  type: "day" | "night";
  data: DataType[];
}

function Day(props: DayProps) {
  const { type, data } = props;
  const currentDay = data[0];
  return (
    <div className={`wrapper weather ${type}`}>
      <div className="top">
        <h1 className="title">{type === "day" ? "Day" : "Night"}</h1>
        <FontAwesomeIcon
          title={currentDay?.weatherInfo.IconPhrase}
          icon={mapWeatherIcons(currentDay?.weatherInfo.Icon) ?? faCloudSunRain}
          className="icon"
        />
        <div className="status">{currentDay?.weatherInfo.IconPhrase}</div>
        <div className="temperature">
          {convertF2C(currentDay?.temperature.Value).toFixed(1)} °C
        </div>
      </div>

      <div className="divide">
        <hr />
      </div>

      <div className="bottom">
        {data.slice(1).map((v, i) => (
          <Days
            key={i}
            day={new Date(v.Date).getDay()}
            detail={v.weatherInfo.IconPhrase}
            weather={v.weatherInfo.Icon}
            temperature={convertF2C(v.temperature.Value).toFixed(1)}
            theme={type === "day" ? "light" : "dark"}
          />
        ))}
      </div>
    </div>
  );
}

export default Day;
