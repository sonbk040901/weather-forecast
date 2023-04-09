import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudShowersHeavy,
} from "@fortawesome/free-solid-svg-icons";
import mapWeatherIcons from "@utils/mapWeatherIcons";
import "@styles/Days.scss";
interface DaysProps {
  day: number;
  weather: number;
  temperature: string;
  theme: "light" | "dark";
}
function convertValueToDay(params: number) {
  switch (params) {
    case 0:
      return "Thứ 2";
    case 1:
      return "Thứ 3";
    case 2:
      return "Thứ 4";
    case 3:
      return "Thứ 5";
    case 4:
      return "Thứ 6";
    case 5:
      return "Thứ 7";
    case 6:
      return "Chủ nhật";
    default:
      throw new Error("Invalid day");
  }
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
          icon={mapWeatherIcons(weather)}
          className="icon-mini"
        />
      </div>
      <div className="temperature-mini">{props.temperature} °C</div>
    </div>
  );
}

export default Days;
