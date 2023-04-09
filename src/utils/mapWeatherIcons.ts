import {
  faSun,
  faCloudSun,
  faCloud,
  faCloudShowersHeavy,
  faCloudSunRain,
  faCloudBolt,
  faCloudMoon,
  faMoon,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
export default function mapWeatherIcons(icon: number): any {
  switch (icon) {
    case 1:
      return faSun;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return faCloudSun;
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return faCloud;
    case 12:
      return faCloudShowersHeavy;
    case 13:
    case 14:
      return faCloudSunRain;
    case 15:
    case 16:
    case 17:
      return faCloudBolt;
    case 18:
      return faCloudShowersHeavy;
    case 32:
      return faWind;
    case 33:
      return faMoon;
    case 34:
    case 35:
    case 36:
    case 38:
      return faCloudMoon;
    default:
  }
}
