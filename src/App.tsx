import { useCallback, useEffect, useMemo, useState } from "react";
import City from "@components/City";
import Forecast, { DataType } from "@components/Forecast";
import { LOCATIONS, ResponseType, BASE_URL, API_KEY } from "@type/index";
import "@styles/GlobalStyles.scss";
import "@styles/App.scss";
function App() {
  const [location, setLocation] = useState(LOCATIONS[0].locationKey);
  const [data, setData] = useState<ResponseType[]>();
  const handleSubmit = useCallback(async (value: number) => {
    let res = await fetch(
      `${BASE_URL}${value}?apikey=${API_KEY}&language=vi&details=true`
    );
    let data: ResponseType[] = (await res.json())?.DailyForecasts;
    setLocation(value);
    setData(data);
  }, []);

  const { dayData, nightData } = useMemo(() => {
    let dayData: DataType[] = [];
    let nightData: DataType[] = [];
    data?.forEach((v) => {
      const { Day, Night, Temperature, Date } = v;
      dayData.push({
        weatherInfo: Day,
        temperature: Temperature.Maximum,
        Date,
      });
      nightData.push({
        weatherInfo: Night,
        temperature: Temperature.Minimum,
        Date,
      });
    });
    return { dayData, nightData };
  }, [data]);

  useEffect(() => {
    handleSubmit(location);
  }, []);
  return (
    <main className="container main">
      <City
        locationKey={location}
        cityList={LOCATIONS}
        onChange={(v) => {
          handleSubmit(v);
        }}
      />
      <Forecast
        type="day"
        data={dayData}
      />
      <Forecast
        type="night"
        data={nightData}
      />
    </main>
  );
}

export default App;
