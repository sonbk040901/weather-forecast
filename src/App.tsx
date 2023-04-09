import { useState } from "react";
import City from "@components/City";
import Forecast from "@components/Forecast";
import { LOCATIONS } from "@type/index";
import { useCalculate, useFetchData } from "@hooks/index";
import "@styles/GlobalStyles.scss";
import "@styles/App.scss";
function App() {
  const [location, setLocation] = useState(LOCATIONS[0].locationKey);
  const [data, fetchData] = useFetchData(LOCATIONS[0].locationKey);
  const { dayData, nightData } = useCalculate(data);
  return (
    <main className="container main">
      <City
        locationKey={location}
        cityList={LOCATIONS}
        onChange={(v) => {
          setLocation(v);
          fetchData(v);
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
