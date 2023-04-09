//request type
export type RequestType = {
  locationKey: string;
  metric: boolean;
  language: "vi" | "en";
  detail: true;
};
export const API_KEY = "b2pqYrUTi0AhMFAiSZndV6rAmdBNOenZ";
export const BASE_URL = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/`;
export type LocationType = {
  locationKey: number;
  cityName: string;
};
export const LOCATIONS: LocationType[] = [
  { locationKey: 353412, cityName: "Hà Nội" },
  { locationKey: 352954, cityName: "Đà Nẵng" },
  { locationKey: 353981, cityName: "Hồ Chí Minh" },
];
//response type
export type TemperatureType = {
  Value: number;
  Unit: string;
  UnitType: number;
};
export type WeatherInfoType = {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  PrecipitationIntensity: string;
};
export type ResponseType = {
  Date: string;
  EpochDate: number;
  Temperature: {
    Minimum: TemperatureType;
    Maximum: TemperatureType;
  };
  Day: WeatherInfoType;
  Night: WeatherInfoType;
  Sources: string[];
  MobileLink: string;
  Link: string;
};
