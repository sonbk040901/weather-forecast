import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mapWeatherIcons from "@utils/mapWeatherIcons";
import { convertValueToDay } from "@utils/convert";
import "@styles/Days.scss";
interface DaysProps {
  day: number;
  weather: number;
  temperature: string;
  theme: "light" | "dark";
  detail: string;
}
function Days(props: DaysProps) {
  const { weather, theme } = props;
  return (
    <div className={`wrapper days ${theme}`}>
      <div className="day-mini">
        <h4>{convertValueToDay(props.day)}</h4>
      </div>
      <div className="weather-mini">
        <FontAwesomeIcon
          title={props.detail}
          icon={mapWeatherIcons(weather)}
          className="icon-mini"
        />
      </div>
      <div className="temperature-mini">{props.temperature} °C</div>
    </div>
  );
}

export default Days;
