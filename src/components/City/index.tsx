import "@styles/City.scss";
import Select from "@components/Select";
import { LocationType } from "@type/index";
interface CityProps {
  locationKey: number;
  cityList: LocationType[];
  onChange: (value: number) => void;
}
function City({ locationKey, cityList, onChange }: CityProps) {
  return (
    <div className="wrapper city">
      <Select
        value={locationKey}
        onChange={onChange}
        dataSet={cityList.map((v) => ({
          value: v.locationKey,
          label: v.cityName,
        }))}
      />
    </div>
  );
}

export default City;
